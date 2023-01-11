import { useLoaderData } from "react-router-dom"
import { ClientForm } from "./ClientForm"

function Index() {
    const clients = useLoaderData() 

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Cleintes</h1>
            <p className="mt-3">Administrar tus Clientes</p>
            { clients.length ? (
                <table className="w-full bg-white shadow mt-5 table-auto">
                    <thead className="bg-blue-800 text-white">
                        <tr>
                            <th className="p-2">Clientes</th>
                            <th className="p-2">Contacto</th>
                            <th className="p-2">Eliminar</th>
                        </tr>
                    </thead>

                    <tbody>
                        { clients.map(client => (
                           <ClientForm 
                                key={client.id}
                                client={client} 
                            />                          
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className ="text-center mt-10">No Hay Clientes Aún</p>
            )}
        </>
    )
}

export { Index }








