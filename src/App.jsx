import Card from './compomemt/Card'
import './App.css'
import Compo from './compomemt/Compo'


function App() {

  const myArr = [1,2,3,4,5] 
  
  const Employed = {
    EmployName : "Sibtain Iqbal",
    EmployEmail : "Sibtainiqbal8844@gmail.com",
    Active: "ACTIVE",
    Title : "backend develooper"
  }
  const Designer = {
    EmployName : "Adil HUssain",
    EmployEmail : "Sibtain0934@gmail.com",
    Active: "Not Active",
    Title : "Graphic Designer"
  }
  
  return (

    <>
   
     <h1 className='bg-yellow-300 rounded-xl p-3 text-black mb-6' >tailwind css</h1>

    <Card username="sibtain" buttonTxt = "Click me "  lorem= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?" />
    <br />
    <Card username = "Alyananh" buttonTxt= "Visit me "  />


    <Compo   details = {Employed} Designers = {Designer}  />

    </>
  )
}

export default App
