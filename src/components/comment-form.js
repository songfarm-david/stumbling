import React from "react"

const CommentForm = props => (
	<form name="comment-form" action={`/+${props.slug}`} method="post" data-netlify="true" data-netlify-honeypot="bot-field">
		<input type="hidden" name="bot-field" />
		<input type="hidden" name="form-name" value="comment-form" />
		<div>
			<label htmlFor="name">Name</label>
			<input type="text" name="name" id="name" required />
		</div>
		<div>
			<label htmlFor="email">Email</label>
			<input type="text" name="email" id="email" required />
		</div>
		<div>
			<label htmlFor="comment">Your comment</label>
			<textarea name="comment" id="comment"></textarea>
		</div>
		<input type="submit" value="Post Comment" />
	</form>
)

export default CommentForm
