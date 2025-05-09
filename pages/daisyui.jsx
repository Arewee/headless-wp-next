import Layout from "@/components/Layout"



function daisyui() {
  return (
      <Layout>

            <div className="">

                  <h1 className="text-4xl">Daisyui-components</h1>

                  <div className="bg-gray-800 p-8 mt-8">
                        <h1 className="text-xl pb-8">Button</h1>
                        <div className="py-8">
                              {/* daisyUI component here:*/}
                              <button className="btn btn-primary">Knappjävel</button>
                        </div>
                  </div>

                  <div className="divider divider-success">this is a "divider"</div>

                   <div className="bg-gray-800 p-8 mt-8">
                        <h1 className="text-xl pb-8">Dropdown</h1>
                        <div className="py-8">
                              {/* daisyUI component here:*/}
                              <details className="dropdown">
                                    <summary className="btn m-1 border-amber-200">Choose your pill</summary>
                                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-green-400">
                                          <li><a>The blue pill</a></li>
                                          <li><a>The red pill</a></li>
                                    </ul>
                              </details>
                        </div>
                  </div>

                  <div className="divider divider-success">this is a "divider"</div>

                        <div className="bg-gray-800 p-8 mt-8">
                        <h1 className="text-xl pb-8">Modal</h1>
                        <div className="py-8">
                              {/* daisyUI component here:*/}
                              {/* Open the modal using document.getElementById('ID').showModal() method */}
                              <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>
                              <dialog id="my_modal_1" className="modal">
                              <div className="modal-box">
                              <h3 className="font-bold text-lg">Hello!</h3>
                              <p className="py-4">Press ESC key or click the button below to close</p>
                              <div className="modal-action">
                                    <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                    </form>
                              </div>
                              </div>
                              </dialog>
                        </div>
                  </div>

                  <div className="divider divider-success">this is a "divider"</div>
                           <div className="bg-gray-800 p-8 mt-8">
                        <h1 className="text-xl pb-8">Card</h1>
                        <div className="py-8">
                              {/* daisyUI component here:*/}
                              
                        <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                        <img
                              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                              alt="Shoes" />
                        </figure>
                        <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                              <button className="btn btn-primary">Buy Now</button>
                        </div>
                        </div>
                        </div>
                        </div>
                  </div>
                  <div className="divider divider-success">this is a "divider"</div>

                    <div className="bg-gray-800 p-8 mt-8">
                        <h1 className="text-xl pb-8">Input</h1>
                        <div className="py-8">
                              {/* daisyUI component here:*/}
                              <fieldset className="fieldset">
                                    <legend className="fieldset-legend">What is your name?</legend>
                                    <input type="text" className="input" placeholder="Type here" />
                                    <p className="label">Optional</p>
                              </fieldset>

                              <label className="input validator">
                                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                          strokeLinejoin="round"
                                          strokeLinecap="round"
                                          strokeWidth="2.5"
                                          fill="none"
                                          stroke="currentColor"
                                    >
                                          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                    </svg>
                                    <input type="email" placeholder="mail@site.com" required />
                                    </label>
                                    <div className="validator-hint hidden">Enter valid email address</div>
                        </div>
                  </div>
            </div>   

      </Layout>
  )
}
export default daisyui