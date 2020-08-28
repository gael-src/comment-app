import React from "react";
import List from "./List";

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 0,
			comment: "",
			name: "",
			list: [
				{ id: "1", comment: "Good Game...", name: "Andreas" },
				{ id: "2", comment: "True That...", name: "Victoria" },
				{ id: "3", comment: "Absolutely...", name: "Vadim" },
				{ id: "4", comment: "Knew it...", name: "Gael" },
			],
		};
		// BIND FUNCTIONS
		this.submitComment = this.submitComment.bind(this);
		this.deleteComment = this.deleteComment.bind(this);
		this.handleChangeTextarea = this.handleChangeTextarea.bind(this);
		this.handleChangeInput = this.handleChangeInput.bind(this);
	}

	// SET NAME IN STATE
	handleChangeInput(event) {
		this.setState({ name: event.target.value });
		console.log("lol 1");
		console.log(event.target.value);
	}

	// SET COMMENT IN STATE
	handleChangeTextarea(event) {
		this.setState({ comment: event.target.value });
		console.log("lol 2");
		console.log(event.target.value);
	}

	// SET LIST IN STATE AND RESET INPUT AND TEXT AREA VALUE
	submitComment(event) {
		event.preventDefault();
		const currentComment = {
			comment: this.state.comment,
			name: this.state.name,
		};
		const listState = this.state.list;
		// PUSH INTO LIST
		listState.push(currentComment);
		// RESET COMMENT AND NAME IN STATE
		this.setState({
			id: `1${Date.now()}`,
			comment: "",
			name: "",
			list: listState,
		});
	}

	deleteComment(id) {
		console.log(this.state.list);
		console.log(id);
	}

	render() {
		return (
			<main className="main">
				<h2>Lorem Ipsum</h2>
				<article>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil enim,
					aspernatur quo iure aliquam exercitationem error dignissimos accusamus
					quae eaque iusto voluptatibus magni aliquid harum quos ad voluptatem
					modi? Facere culpa quasi asperiores nemo doloribus earum dolorem
					quaerat! Excepturi perferendis blanditiis beatae iure quasi numquam
					quo aliquid fuga in dolores? Pariatur, corrupti dolorum corporis, eius
					magnam fugiat atque expedita, impedit iste maxime aliquid. Eligendi
					magnam qui omnis delectus, aliquid vel voluptatum at, vitae quidem
					magni expedita perspiciatis laboriosam hic. Vitae error, voluptatum
					aliquam eligendi, sed praesentium pariatur sunt dignissimos aliquid
					nobis perspiciatis deleniti adipisci molestiae, eum maxime cum ullam
					assumenda quibusdam. Molestias quia ea, dolor at ab atque nesciunt
					itaque perspiciatis sapiente voluptatibus. Eius veritatis hic corrupti
					voluptatem distinctio ipsa molestias amet maiores neque? Accusamus
					porro iusto delectus temporibus possimus deserunt, eveniet dolore
					natus, ex distinctio consequatur exercitationem debitis, dicta magnam
					placeat commodi nulla odit! Deserunt quibusdam, corrupti tenetur nemo
					repudiandae minima corporis sequi eaque nihil ipsam nam aperiam saepe,
					quo doloremque quaerat quisquam! Molestiae minima quis modi a. Culpa
					blanditiis illum sed impedit. Distinctio dolorem temporibus facilis
					error tempora quam reiciendis voluptatem sed alias eaque. Quas iure
					quis expedita excepturi rem, ab architecto aperiam, libero reiciendis
					laborum eveniet consectetur temporibus cum, omnis nostrum. Maxime
					omnis fugiat molestiae adipisci totam voluptates reprehenderit magni
					quisquam saepe deleniti placeat quo, laborum fugit nulla corporis
					impedit repellendus, non architecto reiciendis voluptatem labore.
					Natus, totam, officia a deserunt suscipit delectus minus quam at
					sapiente repellendus beatae aperiam odio aspernatur! Nesciunt
					voluptatum ex officia repellat voluptatibus cum odio nulla velit.
					Labore voluptatibus sequi laborum modi fugit reiciendis incidunt
					blanditiis quasi libero eum delectus, iure quas magni veniam aliquid
					voluptates rerum! Dolores alias animi eos magnam consequatur minima
					vitae, modi error, non ut porro, tempore numquam. Natus voluptas porro
					nemo distinctio aliquid omnis eius cumque deserunt modi repudiandae,
					nostrum atque, accusamus illo. Magnam pariatur, praesentium unde
					beatae numquam soluta, incidunt ratione ullam aut, fugiat cupiditate.
					Doloremque, cupiditate! Sequi, ducimus laborum molestiae autem officia
					culpa optio laboriosam sapiente, totam commodi, corporis vero tempora.
					Omnis reiciendis molestiae incidunt distinctio praesentium eligendi
					similique repudiandae cumque earum possimus veritatis, quibusdam
					obcaecati natus maiores. Iusto quisquam voluptates minima sapiente
					facilis laudantium tempora quis culpa odio tempore, doloremque quia
					dolor necessitatibus eius consequatur hic, dolorum assumenda modi
					veniam. Veritatis explicabo laborum quam nisi doloribus dolores
					aliquam eligendi laboriosam minus iure velit totam, ex temporibus
					iusto facilis sed ab ea harum odit doloremque veniam! Voluptates
					temporibus deserunt impedit harum, voluptate dolores odio rerum
					aliquid? Provident dolor eos omnis eius delectus similique. Ex nisi
					perspiciatis quam repudiandae natus. Excepturi odio quia sed magnam
					repudiandae voluptates modi, esse, architecto, quaerat temporibus
					laborum animi? Ea eaque, dolorem reprehenderit aperiam fuga totam
					impedit explicabo error sunt mollitia, vitae magni quisquam aspernatur
					accusamus architecto dignissimos dicta itaque minima amet. Quam
					consequuntur, eaque animi sunt voluptates facilis dignissimos
					accusantium dolorum inventore. Est voluptas debitis nobis, aspernatur
					voluptate eaque eligendi omnis harum. Magni porro reprehenderit est
					natus consequatur nobis distinctio fugit ducimus dolorum et temporibus
					aliquid, vitae omnis nulla nesciunt!
				</article>
				<h2>Tell us what you think about this article:</h2>

				{/* LIST DISPLAY COMPONENT */}
				<List list={this.state.list} deleteComment={this.deleteComment} />

				<form action="#" className="form-wrapper">
					<legend>Your Comment:</legend>
					<label htmlFor="comment-form">Comment</label>
					<textarea
						name="comment-form"
						id="comment-form"
						cols="30"
						rows="10"
						value={this.state.comment}
						onChange={this.handleChangeTextarea}
					></textarea>
					<label htmlFor="name-form">Name *</label>
					<input
						type="text"
						id="name-form"
						value={this.state.name}
						onChange={this.handleChangeInput}
					/>
					<button onClick={this.submitComment}>Submit</button>
				</form>
			</main>
		);
	}
}

export default Main;
