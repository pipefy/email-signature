import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components'
import reboot from 'styled-reboot';
import Clipboard from 'react-clipboard.js';

import { FieldWrapper } from "./components/FieldWrapper";
import { Text } from "./components/Text";
import { Button } from "./components/Button";

const GlobalStyle = createGlobalStyle`
  ${reboot};

  html,
  body {
      font-family: Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
      background-color: #f5f6f7;
  }
  
  .App {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .signature-wrapper {
    margin: 2rem 0;
    padding: 2rem 1rem;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
  
  .signature-actions {
    max-width: 590px;
    margin: 1rem auto 0;
    padding-top: 1rem;
    border-top: 1px solid #ddd;
  }
  
  .user-input {
    margin: 2rem 0;
    padding: 2rem 1rem;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #ddd;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    
    label {
      flex: 1 1 0;
      
      :not(:first-child) {
        margin-left: .5rem;
      }
      
      :not(:last-child) {
        margin-right: .5rem;
      }
    }
  }
`;

function App() {
  const initialSignatureState = {
    name: 'Daniel Nass',
    role: 'SR Front-end Engineer',
    phone: '+55 41 99926-8856',
    hero: 'pipefy',
  };

  const HEROS = {
    pipefy: 'Take control and improve your work with <a href="https://www.pipefy.com/?utm_source=email-signature&utm_medium=email&utm_campaign=UNUN01n001+honeybadger-signature+EN" style="color: rgb(59,91,253);">Pipefy</a>.',
    partners: '​The way consultancy is done has changed. Set yourself apart. Become a <a href="https://www.pipefy.com/partners/?utm_source=email-signature&utm_medium=email&utm_campaign=UNUN01n001+honeybadger-signature+EN" style="color: rgb(59,91,253);">Pipefy Partner</a>.',
    cs: '​Let us know what you like! Write a review for <a href="http://www.capterra.com/reviews/144848/Pipefy/new" style="color: rgb(59,91,253);">Pipefy</a>.',
    people: '​Join our #HoneyBadger team! <a href="https://www.pipefy.com/careers/?utm_source=email-signature&utm_medium=email&utm_campaign=UNUN01n001+honeybadger-signature+EN" style="color: rgb(59,91,253);">Apply here</a>.',
  };

  const initialCopyMsgState = "Copy Signature";

  const [signature, setSignature] = useState(initialSignatureState);
  const [copyMsg, setCopyMsg] = useState(initialCopyMsgState);

  const createMarkup = () => ({__html: HEROS[signature.hero]});

  const handleChange = (e) => {
    setSignature({
      ...signature,
      [e.target.name]: e.target.value,
    });
  };

  const handleCopyMsg = () => {
    setCopyMsg("Copied!");

    setTimeout(() => {
      setCopyMsg(initialCopyMsgState);
      window.getSelection().removeAllRanges();
    }, 3000);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <div className="signature-wrapper">
        <div id="signature" className="signature" style={{ maxWidth: "590px", margin: '0 auto' }}>
          <table cellSpacing="0" cellPadding="0" width="100%" border="0">
            <tbody>
              <tr>
                <td>
                  <table cellSpacing="0" cellPadding="0" width="100%" border="0">
                    <tbody>
                      <tr>
                        <td width="90">
                          <a href="https://www.pipefy.com/?utm_source=email-signature&utm_medium=email&utm_campaign=UNUN01n001+honeybadger-signature+EN">
                            <img alt="Pipefy.com"
                             src="https://pipestyle.staticpipefy.com/default/images/logo-black.png"
                             width="80"
                            />
                          </a>
                        </td>
                        <td style={{ width: '12px', borderLeft: "2.25pt solid rgb(59,91,253)" }}><br /></td>
                        <td>
                          <table cellSpacing="0" cellPadding="0" border="0">
                            <tbody>
                              <tr>
                                <td>
                                  <Text bold color="#293e52">{signature.name}</Text>
                                </td>
                              </tr>
                              <tr>
                                <td><Text color="#99a9be">{signature.role}</Text></td>
                              </tr>
                              <tr>
                                <td><Text>{signature.phone}</Text></td>
                              </tr>
                              <tr>
                                <td><Text underline dangerouslySetInnerHTML={createMarkup()} /></td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table cellSpacing="0" cellPadding="0" width="100%" border="0">
                    <tbody>
                    <tr>
                      <td>
                        <br />
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table cellSpacing="0" cellPadding="0" width="100%" border="0">
                    <tbody>
                      <tr>
                        <td>
                          <Text color="#99a9be" fontSize="11px">
                            Privileged and confidential. If this message has been received in error, notify the sender and delete it.
                          </Text>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="signature-actions">
          <Clipboard
            component={Button}
            data-clipboard-target="#signature"
            onSuccess={handleCopyMsg}
          >
            {copyMsg}
          </Clipboard>
        </div>
      </div>

      <div className="user-input">
        <FieldWrapper
          type="text"
          id="name"
          name="name"
          label="Your name"
          defaultValue={signature.name}
          onChange={handleChange}
        />
        <FieldWrapper
          type="text"
          id="role"
          name="role"
          label="Job title"
          defaultValue={signature.role}
          onChange={handleChange}
        />
        <FieldWrapper
          type="text"
          id="phone"
          name="phone"
          label="Phone"
          defaultValue={signature.phone}
          onChange={handleChange}
        />
        <FieldWrapper
          name="hero"
          id="hero"
          label="Team"
          defaultValue={signature.hero}
          onChange={handleChange}
        >
          <option value="pipefy">Pipefy</option>
          <option value="partners">Partners</option>
          <option value="cs">CS</option>
          <option value="people">People</option>
        </FieldWrapper>
      </div>
    </div>
  );
}

export default App;
