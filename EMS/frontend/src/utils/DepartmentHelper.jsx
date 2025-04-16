import { useNavigate } from "react-router-dom"

export const columns = [
    {
        name: "S No",
        selector: (row) => row.sno
    },
    {
        name: "Department Name",
        selector: (row) => row.dep_name
    },
    {
        name: "Description",
        selector: (row) => row.description
    },
    {
        name: "Action",
        selector: (row) => row.action
    }
]

export const DepartmentButtons = ({_id}) =>{

    const navigate = useNavigate()

    return (
        <div className="flex space-x-3">
           <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
           onClick={() => {
                navigate(`/admin-dashboard/department/${_id}`)
           }}
           >
            UDPATE
        </button>
        <button class="bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            DELETE
        </button>
            
        </div>
    )
}