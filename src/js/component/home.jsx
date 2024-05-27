import React,{useState} from "react";


//create your first component
const Home = () => {
	const [tareas,setTareas] = useState(["hacerTarea", "otra tarea"])
	const [nuevaTarea, setNuevaTarea] = useState([""]);


	const handleTAREAnUEVA = (event) =>{
		setTareanueva(event.target.value)
	}
	

	const handleSubmit = (event) => {
		event.preventDefault()
		setTareas
		}
	
	return (

	<div className="w-50 m-auto mt-5">
		<form onSubmit = {handleTareas} >
			<div className="mb-3">
				<label for="exampleInputEmail1" className="form-label">Tarea</label>
				<input onChange={handleTareas} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
				<div id="tasklHelp" className="form-text">pon la tarea.</div>
			</div>
			<button type="submit" className="btn btn-primary">Submit</button>
			
		</form>

		<ul className=" w-50 m-auto">
			{tareas.map((item,index) => (
				<li key={index}>{item} 
				<button onClick={ ()=> handleDelete(index)} type></button>
				</li>
			))}
		</ul>
	</div>
	);
};

export default Home;
