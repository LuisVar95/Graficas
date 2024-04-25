import React, { useEffect, useState } from 'react'
import {LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, Scatter, ComposedChart, Bar, BarChart} from 'recharts'
import clienteAxios from '../config/clienteAxios'

const Graficas = () => {

const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);

const [anio, setAnio] = useState(yesterday.getFullYear().toString());
const [mes, setMes] = useState((yesterday.getMonth() + 1).toString()); // Se suma 1 porque los meses van de 0 a 11
const [dia, setDia] = useState(yesterday.getDate().toString());
const [registros, setRegistros] = useState([])

const handleAnioChange = (e) => {
  setAnio(e.target.value);
}

const handleMesChange = (e) => {
  setMes(e.target.value);
}

const handleDiaChange = (e) => {
  setDia(e.target.value);
}

  useEffect(() => {
    const obtenerRegistros = async () => {
      const { data } = await clienteAxios(`/registros/registros/${anio}/${mes}/${dia}`)
      setRegistros(data.registrosFormateados);
    }

    obtenerRegistros();
  }, [anio, mes, dia])

  // Ordenar los registros por el campo 'name'
  const registrosOrdenados = registros.slice().sort((a, b) => a.name.localeCompare(b.name));



  /*const data = [
      {
        name: "Producto A",
        produccion: 100,
        ventas: 80,
        costoProduccion: 500,
        inventario: 450,
        calidad: 95,
        rendimientoMaquina: 90,
      },
      {
        name: "Producto B",
        produccion: 150,
        ventas: 120,
        costoProduccion: 600,
        inventario: 180,
        calidad: 98,
        rendimientoMaquina: 85,
      },
      {
        name: "Producto C",
        produccion: 180,
        ventas: 120,
        costoProduccion: 700,
        inventario: 350,
        calidad: 97,
        rendimientoMaquina: 97,
      },
      {
        name: "Producto D",
        produccion: 165,
        ventas: 200,
        costoProduccion: 900,
        inventario: 230,
        calidad: 93,
        rendimientoMaquina: 92,
      }
  ]*/

  return (
    <>
      <div className='buscadores'>
        <h1 className='heading'>Titulo aqui</h1>
        <div className='buscadores__flex'>
          <div className='buscador'>
            <p className='buscador__texto'>Buscar por Año: </p>
            <select name="" id="" className='buscador__select' value={anio} onChange={handleAnioChange}>
              <option value="" className='buscador__option'>--Seleccionar--</option>
              <option value="2024" className='buscador__option'>2024</option>
              <option value="2023" className='buscador__option'>2023</option>
            </select>
          </div>
          <div className='buscador'>
            <p className='buscador__texto'>Buscar por Mes: </p>
            <select name="" id="" className='buscador__select' value={mes} onChange={handleMesChange}>
              <option value="" className='buscador__option'>--Seleccionar--</option>
              <option value="1" className='buscador__option'>1</option>
              <option value="2" className='buscador__option'>2</option>
              <option value="3" className='buscador__option'>3</option>
              <option value="4" className='buscador__option'>4</option>
              <option value="5" className='buscador__option'>5</option>
              <option value="6" className='buscador__option'>6</option>
              <option value="7" className='buscador__option'>7</option>
              <option value="8" className='buscador__option'>8</option>
              <option value="9" className='buscador__option'>9</option>
              <option value="10" className='buscador__option'>10</option>
              <option value="11" className='buscador__option'>11</option>
              <option value="12" className='buscador__option'>12</option>
            </select>
          </div>
          <div className='buscador'>
            <p className='buscador__texto'>Buscar por Dia: </p>
            <select name="" id="" className='buscador__select' value={dia} onChange={handleDiaChange}>
            {[...Array(31).keys()].map((day) => (
              <option className='buscador__option' key={day + 1} value={day + 1}>{day + 1}</option>
            ))}
            </select>
          </div>
        </div>
      </div>
      <div className='graficas'>
        <div className='graficas__contenedor'>
          <LineChart
            width={800}
            height={600}
            data={registrosOrdenados}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="produccion" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="ventas" stroke="#82ca9d" />
            <Line type="monotone" dataKey="costoProduccion" stroke="#3498db" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="inventario" stroke="#e74c3c" />
            <Line type="monotone" dataKey="calidad" stroke="#f39c12" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="rendimientoMaquina" stroke="#9b59b6" />
          </LineChart>
        </div>
        <div>
          <ComposedChart
          width={823}
          height={624}
          data={registrosOrdenados}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <Tooltip />
          <Legend />
          <XAxis dataKey="name" />
          <YAxis/>   
          <Scatter name="Producción" dataKey="produccion" fill="#8884d8" />
          <Scatter name="Ventas" dataKey="ventas" fill="#82ca9d" />
          <Line name="Costo de produccion" dataKey="costoProduccion" stroke="#3498db" dot={false} activeDot={false} legendType="circle" />
          <Line name="Inventario" dataKey="inventario" stroke="#e74c3c" dot={false} activeDot={false} legendType="circle" />
          <Scatter name="Calidad" dataKey="calidad" fill="#f39c12" />
          <Line name="Rendimiento de maquina" dataKey="rendimientoMaquina" stroke="#9b59b6" dot={false} activeDot={false} legendType="circle" />
        </ComposedChart>
        </div>
      </div>
      <div className='graficas'>
        <div className='graficas__contenedor'>
        <BarChart
          width={800}
          height={600}
          data={registrosOrdenados}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            interval={0}
            height={1}
            scale="band"
            xAxisId="quarter"
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="produccion" fill="#8884d8"/>
          <Bar dataKey="ventas" fill="#82ca9d" />
          <Bar dataKey="costoProduccion" fill="#3498db" />
          <Bar dataKey="inventario" fill="#e74c3c" />
          <Bar dataKey="calidad" fill="#f39c12" />
          <Bar dataKey="rendimientoMaquina" fill="#9b59b6" />
        </BarChart>
        </div>
        <div className='graficas__contenedor'>
        <LineChart
          layout="vertical"
          width={800}
          height={600}
          data={registrosOrdenados}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="produccion" stroke="#8884d8"/>
            <Line type="monotone" dataKey="ventas" stroke="#82ca9d" />
            <Line type="monotone" dataKey="costoProduccion" stroke="#3498db"/>
            <Line type="monotone" dataKey="inventario" stroke="#e74c3c" />
            <Line type="monotone" dataKey="calidad" stroke="#f39c12"/>
            <Line type="monotone" dataKey="rendimientoMaquina" stroke="#9b59b6" />
        </LineChart>
        </div>
      </div>
    </>
  )
}

export default Graficas