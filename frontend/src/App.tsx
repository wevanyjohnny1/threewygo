import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { BrowserRouter } from "react-router-dom";

import logoImg from "./assets/logo.svg";
import ManageCoursesModal from "./components/ManageCoursesModal";
import { CoursesProvider } from "./contexts/Courses/CoursesContext";
import AppRoutes from "./shared/routes";
import { globalStyles } from "./styles/global";
import { Container, Header } from "./styles/pages/app";

import "react-responsive-modal/styles.css";

export const App = () => {
  const [open, setOpen] = useState(false);
  globalStyles();

  return (
    <BrowserRouter>
      <CoursesProvider>
        <Container>
          <Header>
            <a href="/">
              <img src={logoImg} alt="" />
            </a>

            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger asChild>
                <a>
                  <IoMdSettings />
                  Gerenciar cursos
                </a>
              </Dialog.Trigger>

              <ManageCoursesModal />
            </Dialog.Root>
          </Header>
          <AppRoutes />
        </Container>
      </CoursesProvider>
    </BrowserRouter>
  );
};
