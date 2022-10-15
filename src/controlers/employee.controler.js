import { pool } from "../db.js";
export const getEmployees = async(req, res) =>{
    try{
const [rows] = await pool.query('SELECT * FROM employee')
res.json(rows)
    }
    catch(error){
        return res.status(500).json({message: 'errorrrrr'})

    }
}
export const getEmployee = async(req, res) =>{
   try{
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
    console.log(rows)
    if(rows.length <= 0 ){
        return res.status(400).json({menssage: 'Employee not found'})
    }
    res.json(rows[0])
   }catch(error){
    return res.status(500).json({message: 'errorrrr'})
   }}
   export const createEmploye = async(req, res)=>{
     const {name, salary} = req.body
try{
     const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)',[name, salary])

     res.send({
        id: rows.insertId,
        name,
        salary,
     })}catch(error){
        return res.status(500).json({message: 'errrrooor'})
     }




    }
export const updateEmploye = async(req, res) =>{
    try{
    const {id} = req.params
    const {name, salary} = req.body
   const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])
console.log(result)
   if(result.affectedRows === 0 ){
    return res.status(404).json({message: 'Employee not found'})
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])
    
        res.json(rows[0]);
   }}
   catch(error){
    return res.status(500).json({message: 'errorr'})
   }

}


export const deleteEmploye = async (req, res) =>{
 try{
    const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
if(result.affectedRows <= 0){
    return res.status(404).json({ message: 'Emloyeed not found' })
}
    res.sendStatus(204);

 }catch(error){
    return res.status(500).json({message: 'errorrrr'})
 }}