import React from "react";

function List(props) {
	return (
		<ul className="comments-ul">
			{/* COMMENT COUNTER */}
			<p className="comment-count">{props.list.length} Comments</p>
			{/* MAP RETURN REACT PROPS IN HTML LIST */}
			{props.list.map((item) => {
				return (
					<li className="li-comment">
						<button onClick={() => props.deleteComment(item.id)}>X</button>
						<p className="p-name">{item.name}:</p>
						<p className="p-comment">{item.comment}</p>
					</li>
				);
			})}
		</ul>
	);
}

export default List;
