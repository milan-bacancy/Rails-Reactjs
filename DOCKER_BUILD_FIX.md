# Docker Build Fix for nio4r Compatibility Issue

## Problem Summary

The Docker build was failing when installing `wkhtmltopdf-binary` due to a compilation error in the `nio4r` gem (version 2.5.8). The specific error was:

```
selector.c:301:26: error: passing argument 1 of 'rb_ensure' from incompatible pointer type
```

## Root Cause Analysis

1. **Version Mismatch**: Your project specifies Ruby 2.7.2 (in `.ruby-version` and `Gemfile`), but the Docker container is using Ruby 3.2.0
2. **nio4r Compatibility**: The locked `nio4r` version (2.5.8) in `Gemfile.lock` is incompatible with Ruby 3.2.0 due to API changes
3. **Missing Dependency**: `wkhtmltopdf-binary` was not explicitly listed in the `Gemfile`

## Applied Fixes

I've updated your `Gemfile` with the following changes:

### 1. Added wkhtmltopdf-binary dependency
```ruby
# Add wkhtmltopdf for PDF generation
gem 'wkhtmltopdf-binary', '~> 0.12.6'
```

### 2. Added compatible nio4r version constraint
```ruby
# Ensure compatible nio4r version for Ruby 3.x compatibility
gem 'nio4r', '>= 2.5.9'
```

## Solution Options

### Option A: Update Gemfile.lock (Recommended)
Run the following command to update your dependencies:
```bash
bundle update nio4r
```

This will update `nio4r` to version 2.5.9 or later, which is compatible with Ruby 3.2.

### Option B: Fix Docker Ruby Version
If you prefer to stick with Ruby 2.7.2, update your Dockerfile to use the correct Ruby version:
```dockerfile
FROM ruby:2.7.2
# ... rest of your Dockerfile
```

## Verification

After applying the fix, your Docker build should complete successfully with:
```bash
docker build .
```

The `wkhtmltopdf-binary` gem should install without compilation errors.

## Additional Notes

- `nio4r` version 2.5.9+ includes fixes for Ruby 3.x compatibility
- The changes maintain backward compatibility with Ruby 2.7.2
- If you're using Docker Compose, make sure to rebuild the container with `docker-compose build --no-cache`