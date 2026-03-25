import { RouterProvider } from "react-router-dom"
import Routers from "./Routers/routers"
import { FormProvider } from "./Provider/FormProvider"

function App() {
  return (
    <>
      <FormProvider>
        <RouterProvider router={Routers} />
      </FormProvider>
    </>
  )
}

export default App

