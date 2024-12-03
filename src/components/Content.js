import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [{ id: 1, src: 'images/lviv.jpg', alt: 'Фото Львова' }],
            firstClickStatus: 0,
            secondClickStatus: 0,
            firstStyle: { backgroundColor: '', color: '' },
            secondStyle: { backgroundColor: '', color: '' },
        };
    }

    COLORS = {
        FIRST: { background: 'blue', color: 'white' },
        SECOND: { background: 'green', color: 'black' },
    };

    toggleFirstStyle = () => {
        const { firstClickStatus } = this.state;
        const newStyle =
            firstClickStatus === 0 || firstClickStatus === 2
                ? this.COLORS.FIRST
                : this.COLORS.SECOND;

        this.setState({
            firstClickStatus: firstClickStatus === 2 ? 1 : 2,
            firstStyle: newStyle,
        });
    };

    toggleSecondStyle = () => {
        const { secondClickStatus } = this.state;
        const newStyle =
            secondClickStatus === 0 || secondClickStatus === 1
                ? this.COLORS.SECOND
                : this.COLORS.FIRST;

        this.setState({
            secondClickStatus: secondClickStatus === 2 ? 1 : 2,
            secondStyle: newStyle,
        });
    };

    addImage = () => {
        const newImage = {
            id: this.state.images.length + 1,
            src: 'images/lviv.jpg',
            alt: 'Фото Львова',
        };
        this.setState((prevState) => ({
            images: [...prevState.images, newImage],
        }));
    };

    resizeLastImage = (factor) => {
        const lastImage = document.querySelector('.image-item:last-child img');
        if (lastImage) {
            lastImage.style.width = `${lastImage.offsetWidth * factor}px`;
            lastImage.style.height = `${lastImage.offsetHeight * factor}px`;
        }
    };

    removeLastImage = () => {
        if (this.state.images.length > 0) {
            this.setState((prevState) => ({
                images: prevState.images.slice(0, -1),
            }));
        }
    };

    render() {
        return (
            <div>
                <p>
                    Місце народження: 28 грудня 2004 року, м. Рівне
                </p>

                <p
                    id="third"
                    style={this.state.firstStyle}
                    onClick={this.toggleFirstStyle}
                >Освіта: Обласний науковий ліцей, м. Рівне</p>
                <p
                    id="selector"
                    style={this.state.secondStyle}
                    onClick={this.toggleSecondStyle}
                >&emsp;&emsp;&emsp;НТУУ "КПІ", м. Київ</p>


                <p>Хобі:</p>
                <ul>
                    <li>Читання книг</li>
                    <li>Фільми</li>
                    <li>Подорожі</li>
                </ul>
                <p>Улюблені книги/фільми:</p>
                <ol>
                    <li>"1984" Джордж Оруелл</li>
                    <li>"Амстердам"</li>
                    <li>"Інтерстеллар"</li>
                </ol>

                <p>Львів — місто в Україні, адміністративний центр області, агломерації, району, міської громади, національно-культурний та освітньо-науковий осередок країни, великий промисловий центр і транспортний вузол, вважається столицею Галичини та центром Західної України. За кількістю населення — п'яте місто країни.</p>
                <p>Це місто має багату історію, немовірно красиву архітектуру і особливу атмосферу спокою та завороження. Відвідання Львову це обов'язково відчуття духу старовинної Європи, прогулянки вузькими вуличками, і насолодження різноманітною автентичною кухнею.</p>


                <div>
                    {this.state.images.map((image) => (
                        <div
                            key={image.id}
                            className="image-item"
                            style={{ margin: '10px 0'}}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                style={{ width: '600px', height: '400px' }}
                            />
                        </div>
                    ))}
                </div>

                <div>
                    <button onClick={this.addImage}>Додати</button>
                    <button onClick={() => this.resizeLastImage(1.2)}>Збільшити</button>
                    <button onClick={() => this.resizeLastImage(0.8)}>Зменшити</button>
                    <button onClick={this.removeLastImage}>Видалити</button>
                </div>
            </div>
        );
    }
}

export default Content;
