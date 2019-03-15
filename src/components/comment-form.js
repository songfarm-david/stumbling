import React from "react"

const CommentForm = (props) => (
	<>
		<h3>Leave A Comment:</h3>
		<form name="comment-form" action={`/${props.slug}`} method="post" data-netlify="true" data-netlify-honeypot="bot-field">
			<input type="hidden" name="bot-field" />
			<input type="hidden" name="form-name" value="comment-form" />

			<input name="post" type="hidden" value={props.title} />
			<input name="slug" type="hidden" value={props.slug} />
			<div>
				<label htmlFor="name">Name</label>
				<input type="text" name="name" id="name" required />
			</div>
			<div>
				<label htmlFor="comment">Comment</label>
				<textarea name="comment" id="comment"></textarea>
			</div>
			<div>
				<input type="submit" name="submit" value="Post Comment" />
			</div>
		</form>
	</>
)

export default CommentForm
