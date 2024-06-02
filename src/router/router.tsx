import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layout/MainLayout";
import SheetPage from "../pages/SheetPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'sheet',
        element: <SheetPage />,
        errorElement: <ErrorPage />
      },
    ]
  }
])

export default router;
