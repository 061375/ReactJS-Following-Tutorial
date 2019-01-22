function ContactCard(props) {
	return (
		<div className="contacts">
			<div className="contact-card">
				<img src={props.imgsrc} alt={props.imgalt} />
				<h3>{props.h3}</h3>
				<p>{props.p1}</p>
				<p>{props.p2}</p>
			</div>
		</div>
	)
}