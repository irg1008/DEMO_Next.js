import Styled from "./Error.styles";

type ErrorProps = {
  displayError: boolean;
  error?: string;
};

const Error = ({ displayError, error }: ErrorProps) =>
  displayError && <Styled.Error>{error}</Styled.Error>;

export default Error;
