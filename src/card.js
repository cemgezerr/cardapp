import './input.css'
export default function Card() {
    const bcimg = require('./a.jpeg')
    return <div class="shadow-lg shadow-current relative grid h-[30rem] w-full max-w-[20rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
        <div class=" absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('./c.png')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
            <h2 class="text-left p-4 mb-6 block font-sans text-3xl text-white  font-semibold">
                How we design code open-source projects?
            </h2>
            <div class="w-72 h-7 bg-blue-100  absolute inset-x-3 bottom-12 rounded-none">
                <div class="w-1/3 h-full text-center text-xl text-white bg-green-600  ">
                    <p className='absolute bottom-8 left-10 text-3xl font-semibold py-3'>20% Tamamlandı</p>
                </div>
            </div>
        </div>
    </div>
}