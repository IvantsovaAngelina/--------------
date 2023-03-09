import './style-contact.css'

const Contact = () => {
    return ( 
        <div className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Организационный комитет</h1>
                    </div>
                    <div className="col-md-6">
                        <b>Бурцев Николай Павлович</b>
                        <p>Телефон: + 7 (937) 648-61-86</p>
                        <p>E-mail: burtsev@pgsga.ru</p>
                        <p>Адрес: 443090, Россия, г. Самара,</p>
                        <p>ул. Антонова-Овсеенко, 24</p>
                    </div>
                    <div className="col-md-6">
                    <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A815c715f9488cf4bad28658d9d0affbfeba5586f918c8026c876d6f2e2c2c95c&amp;width=423&amp;height=244&amp;lang=ru_RU&amp;scroll=true"></script>       
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;