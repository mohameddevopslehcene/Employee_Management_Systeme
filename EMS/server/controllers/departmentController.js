import Department from "../models/Department.js";

const getDepartments = async (req, res) => {

    try {
        const departments = await Department.find()
        console.log(departments); 
        return res.status(200).json({success: true, departments})
    } catch (error) {
        console.error("Erreur getDepartment:", error);
        return res.status(500).json({ success: false, error: "get department server error" });
    }
}



const addDepartment = async (req, res) => {

    try {
        const {dep_name, description} = req.body;
        const newDep = new Department({
            dep_name,
            description
        })

        await newDep.save()

        return res.status(200).json({success: true, department: newDep})

    } catch (error) {
        console.error("Erreur addDepartment:", error);
        return res.status(500).json({ success: false, error: "add department server error" });
    }
}

const getDepartmentById = async (req, res) => {

    const {id} = req.params;

    try {
        const department = await Department.findById({_id: id})

    return res.status(200).json({success: true, department: department})

    } catch (error) {
        console.error("Erreur getDepartment by ID:", error);
        return res.status(500).json({ success: false, error: "get department server error" });
    }
} 



const updateDepartmentById = async (req, res) => {

    try {

        const {id} = req.params;
        const {dep_name, description} = req.body
        const updateDep = await Department.findByIdAndUpdate({_id: id}, {
            dep_name,
            description
        })

    return res.status(200).json({success: true, department: updateDep})

    } catch (error) {
        console.error("Erreur getDepartment by ID:", error);
        return res.status(500).json({ success: false, error: "Update department server error" });
    }
} 


export {addDepartment, getDepartments, getDepartmentById, updateDepartmentById}
