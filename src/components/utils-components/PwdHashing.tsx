import React from "react";
import axios from "axios";

interface IPwdProps {}

interface IPwdState {
  pwd: string;
  encrypted: encrypted | null;
  decryptedPwd: string;
  encryptedPwd: string;
  [key: string]: any;
}

type encrypted = {
  encrypted: string;
  md5: string;
  sha1: string;
  sha256: string;
  sha224: string;
  sha384: string;
  sha3: string;
  ripemd160: string;
  sha512: string;
  [key: string]: string;
};

class PwdHashing extends React.PureComponent<IPwdProps, IPwdState> {
  constructor(props: IPwdProps) {
    super(props);
    this.state = {
      pwd: "",
      encrypted: null,
      decryptedPwd: "",
      encryptedPwd: ""
    };
    this.hashPwd = this.hashPwd.bind(this);
    this.inpChange = this.inpChange.bind(this);
    this.decryptPwd = this.decryptPwd.bind(this);
  }

  inpChange(e: React.FormEvent<HTMLInputElement>): void {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }

  hashPwd() {
    axios.post("http://localhost:1366/crypto/encrypt", { text: this.state.pwd }).then(resp => {
      const encrypted = resp.data as encrypted;
      this.setState({ encrypted });
    });
  }
  decryptPwd() {
    axios
      .post("http://localhost:1366/crypto/decrypt", { encryptedPwd: this.state.encryptedPwd })
      .then(resp => this.setState({ decryptedPwd: resp.data.decrypted }));
  }
  render() {
    return (
      <div>
        <div className="section-wrapper">
          <div className="section-title">Password Decrypt Tool</div>
          <section>
            <input
              className="input-text"
              type="text"
              name="encryptedPwd"
              placeholder="Encrypted Pawssword"
              value={this.state.encryptedPwd}
              onChange={this.inpChange}
            />
            <button className="sbmt-btn inp-btn i-rod" onClick={this.decryptPwd}>
              Go
            </button>
            <br />
            {this.state.decryptedPwd && (
              <div className="encrypted-section">
                <div className="section-wrapper">
                  <div className="section-title">decrypted password</div>
                  <section>
                    <div className="encrypted-data">
                      <span className="key">decrypted : </span> <span className="value">{this.state.decryptedPwd}</span>
                    </div>
                  </section>
                </div>
              </div>
            )}
          </section>
        </div>
        <div className="section-wrapper">
          <div className="section-title">Password Hashes Tool</div>
          <section>
            <input
              className="input-text"
              type="text"
              name="pwd"
              placeholder="Pawssword"
              value={this.state.pwd}
              onChange={this.inpChange}
            />
            <button className="sbmt-btn inp-btn i-rod" onClick={this.hashPwd}>
              Go
            </button>
            <br />
            {this.state.encrypted && (
              <div className="encrypted-section">
                <div className="section-wrapper">
                  <div className="section-title">encrypted data</div>
                  <section>
                    {Object.keys(this.state.encrypted).map(key => {
                      const encrypted = this.state.encrypted as encrypted;
                      return (
                        <div className="encrypted-data" key={key}>
                          <span className="key">{key} : </span> <span className="value">{encrypted[key]}</span>
                        </div>
                      );
                    })}
                  </section>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    );
  }
}

export default PwdHashing;
