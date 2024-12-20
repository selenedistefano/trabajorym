import Navegation from '../../components/Navegation/Navegation'

import './contact.css'

export default function Contact() {
    return (
        <div>
            <Navegation />
            <div class='d-flex justify-content-center'>
                <div class='contenedor d-flex flex-column justify-content-center aling-items-center'>

                    <h1 class='contacto text-center'>Contact</h1>
                    <p class='texto text-center'>Leave us your information so we can contact you</p>

                    <form className='container-form justify-content-md-center p-4'>
                        <div class='div-1 d-flex flex-column'>
                            <label class='label-form' for='name'>Name</label>
                            <input class='input-text rounded-2 p-2 border border-0' type='text' name='userName' id='name' required />
                        </div>

                        <div class='div-2 d-flex flex-column'>

                            <label class='label-form' for='email'>Email</label>
                            <input class='input-text rounded-2 p-2 border border-0' type="email" name='userEmail' id='email' required />
                        </div>

                        <div class='div-3 d-flex flex-column'>
                            <label class='label-form' for='message'>Message</label>
                            <textarea class=' textarea rounded-2 p-4 border border-0' name='userMessage' id='message' cols='30' rows='10' required></textarea>
                        </div>

                        <div class='div-4'>
                            <input class='btn-form rounded-2 border border-0' type='submit' value={"Send"} />
                        </div>
                    </form>
                </div>
            </div>

        </div>

    )
}

//no hace falta hacerlo funcional, si quieren ponerle un action pueden usar la forma gratuita de formspree