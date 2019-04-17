import React, { Component } from 'react';
import './Footer.scss';


class Footer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <footer>
                <div className="container">
                <div className="row">

                    <div className="col-lg-12">
                    <div className="orgao">
                        <div className="orgao-logo"></div>
                        <div className="orgao-info">
                        <h5 className="orgao-sigla">{this.props.title}</h5>
                        <p className="orgao-nome">{this.props.description}</p>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-6">
                    <h5 className="phone">{this.props.phone}</h5>
                    <address>
                        <p>Rua Dr. Cincinato Pinto, 503, Centro - Maceió - Alagoas / 57020-050</p>
                        <p>Rua Melo Moraes, 272, Centro - Maceió - Alagoas / CEP 57020-330</p>
                        <p>Rua Barão de Alagoas, 311, Centro - Maceió - Alagoas / CEP 57020-210</p>
                    </address>
                    </div>

                    <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6 footer-menu">
                        <ul>
                            <li className="footer-menu-item"><a href="#"> Início</a></li>
                            <li className="footer-menu-item"><a href="#"> Institucional</a></li>
                            <li className="footer-menu-item"><a href="#"> Fotos</a></li>
                            <li className="footer-menu-item"><a href="#"> Vídeos</a></li>
                            <li className="footer-menu-item"><a href="#"> Downloads</a></li>
                            <li className="footer-menu-item"><a href="#"> Contato</a></li>
                        </ul>
                        </div>
                        <div className="col-lg-6 col-sm-6 footer-menu">
                        <ul>
                            <li className="footer-menu-item"><a href="#"> Notícias</a></li>
                            <li className="footer-menu-item"><a href="#"> Serviços</a></li>
                            <li className="footer-menu-item"><a href="#"> Projetos</a></li>
                            <li className="footer-menu-item"><a href="#"> Portifólio</a></li>
                            <li className="footer-menu-item"><a href="#"> Fornecedores</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-12">
                    <div className="copyright">
                        <div className="itec-logo"></div>
                        <p>Governo do Estado de Alagoas © 2019</p>
                    </div>
                    </div>

                </div>
                </div>
            </footer>
        );
    }
}

export default Footer;


