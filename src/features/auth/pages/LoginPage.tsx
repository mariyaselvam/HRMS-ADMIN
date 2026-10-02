import React from "react";
import { LoginForm } from "../components/LoginForm";
import { Building2 } from "lucide-react";
import {
  pageWrapperClass,
  cardClass,
  cardHeaderClass,
  logoBadgeClass,
  cardTitleClass,
  cardSubtitleClass,
} from "./LoginPage.styles";

export const LoginPage: React.FC = () => {
  return (
    <div className={pageWrapperClass}>
      <div className={cardClass}>
        <div className={cardHeaderClass}>
          <div className={logoBadgeClass}>
            <Building2 className="w-6 h-6" />
          </div>
          <h1 className={cardTitleClass}>HRMS Admin Portal</h1>
          <p className={cardSubtitleClass}>
            Enter your credentials to manage your organization
          </p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
};
