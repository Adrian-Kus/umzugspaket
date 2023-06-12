import { Controller } from "react-hook-form";
import styled from "styled-components";
import styles from "@/app/contact/components/ContactForm.module.css";

export function ContactCheckbox({
  className,
  children,
  control,
  name,
  required,
}) {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required,
      }}
      render={({ field, fieldState }) => {
        return (
          <>
            <div className={className}>
              <Label>
                <CheckboxContainer>
                  <HiddenCheckbox
                    checked={field.value || false}
                    onChange={field.onChange}
                  />
                  <StyledCheckbox checked={field.value}>
                    <Icon viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </Icon>
                  </StyledCheckbox>
                </CheckboxContainer>
              </Label>
              <p className={styles.text}>{children}</p>
            </div>
            {fieldState.error && (
              <p className={styles.error_privacy}>
                {fieldState.error?.message}
              </p>
            )}
          </>
        );
      }}
    />
  );
}

const Label = styled.label``;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 4px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 21px;
  height: 21px;
  border: 1px solid #ffffff;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.4s;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 1px #fff;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;
