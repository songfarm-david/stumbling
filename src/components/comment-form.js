import React from "react"

const CommentForm = (props) => (
	<>
		<h4>Leave A Comment:</h4>
		<form className="flex-form" name="comment-form" action={`/${props.slug}/?comment_received`} method="post" data-netlify="true" data-netlify-honeypot="bot-field">
			<input type="hidden" name="bot-field" />
			<input type="hidden" name="form-name" value="comment-form" />
			<input name="postId" type="hidden" value={props.postId} />
			<div className="flex-field">
				<label htmlFor="name">Name</label>
				<input type="text" name="name" id="name" required />
			</div>
			<div className="flex-field">
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
