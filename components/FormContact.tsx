import React, {ChangeEvent, useState} from 'react';
import {Button} from "./Button";

type ContactState = {
  email: string,
  name: string,
  message: string
}
const FormContact = () => {
  const [state, setState] = useState<ContactState>({
    email: "",
    name: "",
    message: ""
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setState({...state, [name]: value})
  }
  return <form className="w-full mt-5 sm:max-w-4xl">
    <form className="mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Nom et prénom
        </label>
        <input
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-amber-200 focus:shadow-outline text-sm"
          type="text" placeholder="Doe John"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
          E-mail
        </label>
        <input
          onChange={handleChange}
          className="appearance-none text-sm border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-amber-200 focus:shadow-outline"
          type="email" placeholder="exemple@exemple.com"/>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
          Votre message <span className="text-xs">(max 2000 caractères)</span>
        </label>
        <textarea
          onChange={handleChange}
          name="message"
          rows={6}
          className={`resize-none appearance-none text-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-amber-200 focus:shadow-outline ${state.message.length > 2000 && "border-red-600 focus:outline-red-600"}`}
          placeholder="Votre message..."/>
        <span
          className={`flex text-xs justify-end ${state.message.length > 2000 && "text-red-600"}`}>{state.message.length}/2000</span>
      </div>
      <div className="flex items-center justify-between">
        <Button isLink={false}
                className="text-sm text-gray-700 font-medium rounded px-4 py-3 bg-amber-300 hover:bg-amber-500 transition duration-300 ml-auto">
          Envoyer
        </Button>
      </div>
    </form>
  </form>
};

export default FormContact;
