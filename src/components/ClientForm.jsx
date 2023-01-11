const ClientForm = ({ client }) => {
    return (
        <>
          <tr className=" border-b">
                <td className="p-4">
                    <p className="text-2xl text-gray-800 space-y-5">{client.name}</p>
                    <p>{client.company}</p>
                </td>

                <td className="p-4">
                    <p className="text-gray-600"> 
                        <span className="text-gray-800 uppercase font-bold">Email: </span> 
                        {client.email}
                    </p>

                    <p className="text-gray-600"> 
                        <span className="text-gray-800 uppercase font-bold">Télefono: </span> 
                        {client.phone}
                    </p>                   
                </td>

                <td className="p-4 flex gap-3">
                    <button
                        type="button"
                        className="text-blue-600 hover:text-blue-800 font-bold text-sm uppercase"
                    >
                        Editar
                    </button>

                    <button
                        type="button"
                        className="text-red-600 hover:text-red-800 font-bold text-sm uppercase"
                    >
                        Elimnar
                    </button>
                </td>
            </tr>
        </>      
    )
}

export { ClientForm }