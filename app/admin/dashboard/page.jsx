import OverviewStats from "./components/overview-stats";


export default function AdminDashboard() {

    return (<OverviewStats/>)
}


/*
{
    exerciseList.map(exercise => (
        <tr key={exercise._id}>
            <td>{exercise.username}</td>
            <td>{exercise.description}</td>
            <td>{exercise.duration}</td>
            <td>{exercise.date.substring(0, 10)}</td>
            <td>
                <Link to={"/exercises/update/"+exercise._id}>edit</Link> | <a href="#" onClick={() => deleteExercise(exercise._id)}>delete</a>
            </td>
        </tr>
    ))
}
*/