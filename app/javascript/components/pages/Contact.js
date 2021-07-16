import React from 'react'

const Contact = () => {
  return (
    <div className="container">
			<div className="py-4">
				<h1>Contact Page</h1>
				<form>
					<div class="form-group mt-2">
						<label for="exampleInputEmail1">Email address</label>
						<input type="email" class="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
						<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
					</div>
					<div class="form-group mt-3">
						<label for="exampleInputPassword1">Password</label>
						<input type="password" class="form-control mt-1" id="exampleInputPassword1" placeholder="Password" />
					</div>
					<div class="form-check mt-2">
						<input type="checkbox" class="form-check-input mt-1" id="exampleCheck1" />
						<label class="form-check-label" for="exampleCheck1">Check me out</label>
					</div>
					<button type="submit" class="btn btn-primary">Submit</button>
				</form>
			</div>
		</div>
  )
}

export default Contact