import React from "react";
import { useNearWallet } from "./hooks";

export interface NearSigninProps {
  /**
   * Text that will be displayed on the button
   */
  text?: string;

  /**
   * className to pass the button for custom styling
   */
  className: string;

  /**
   * style object to pass the button for custom styling
   */
  style: any;

  /**
   * Account Id of the contract to create a functionCall Access Key for
   */
  contractId?: string;

  /**
   * Methods to authorize the functionCall Access Key for
   */
  methodNames?: string[];

  /**
   * After redirecting to the NEAR Wallet the browser will redirect to the successUrl
   */
  successUrl?: string;

  /**
   * After redirecting to the NEAR Wallet the browser will redirect to the failureUrl if there is an error
   */
  failureUrl?: string;
}

const DEFAULT_STYLE = {
  padding: "0.8rem 1.5rem",
  border: "none",
  borderRadius: "30px",
  backgroundColor: "rgb(0, 114, 206)",
  color: "white",
  cursor: "pointer",
};

/**
 * 
 * `NearSignin` renders a button used to signin to a NEAR account.
 */
export const NearSignin: React.FC<NearSigninProps> = ({
  text = "Signin with NEAR",
  className,
  style,
  ...rest
}) => {
  const wallet = useNearWallet();

  if (wallet.isSignedIn()) {
    return (
      <p
        className={className}
        style={className ? null : style ? style : DEFAULT_STYLE}
      >
        {wallet.getAccountId()}
      </p>
    );
  } else {
    return (
      <button
        className={className}
        style={className ? null : style ? style : DEFAULT_STYLE}
        onClick={() => console.log(wallet.requestSignIn(rest))}
      >
        {text}
      </button>
    );
  }
};
