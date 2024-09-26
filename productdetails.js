import { useParams,useSearchParams } from "react-router-dom";
import { useState } from "react";
function Productdetails(){
    const params = useParams();
    const [searchparams,setSearchParams] = useSearchParams();
    console.log(params.productName);
    console.log(searchparams.get('productdetails'))
    const products = [
        {
            name: 'APPLE iPhone 14 (Blue, 128 GB)',
            imgsrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70',
            price: '12900',
            iscart: false,
            specifications: [
                '4.62,55,131 Ratings & 9,864 Reviews',
                '128 GB ROM',
                '15.49 cm (6.1 inch) Super Retina XDR Display',
                '12MP + 12MP | 12MP Front Camera',
                'A15 Bionic Chip, 6 Core Processor Processor',
                '1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories'
            ],
            thumnails:[
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/v/4/9/-original-imagg2abgspv4shz.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/d/x/r/-original-imagg2abn7zdrf4y.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/d/x/r/-original-imagg2abn7zdrf4y.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/8/g/v/-original-imagg2abtmhwsgpm.jpeg?q=70'

            ]

        },
        {
            name: 'vivo T2x 5G (Glimmer Black, 128 GB)',
            imgsrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/h/e/-original-imagzjhwmsamexfk.jpeg?q=70',
            price: '15000',
            iscart: false,
            specifications: [
                '4.41,41,386 Ratings & 7,502 Reviews',
                '128 GB ROM',
                '16.71 cm (6.58 inch) Full HD+ Display',
                '50MP + 2MP | 8MP Front Camera',
                '5000 mAh Battery',
                'Dimensity 6020 Processor'
            ],
            thumnails:[
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/v/4/9/-original-imagg2abgspv4shz.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/d/x/r/-original-imagg2abn7zdrf4y.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/d/x/r/-original-imagg2abn7zdrf4y.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/8/g/v/-original-imagg2abtmhwsgpm.jpeg?q=70'

            ]
        },
        {
            name: 'APPLE iPhone 14 (Starlight, 128 GB)',
            imgsrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70',
            price: '40000',
            iscart: true,
            specifications: [
                '4.41,41,386 Ratings & 7,502 Reviews',
                '128 GB ROM',
                '16.71 cm (6.58 inch) Full HD+ Display',
                '50MP + 2MP | 8MP Front Camera',
                '5000 mAh Battery',
                'Dimensity 6020 Processor'

            ],
            thumnails:[
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/v/4/9/-original-imagg2abgspv4shz.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/d/x/r/-original-imagg2abn7zdrf4y.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/d/x/r/-original-imagg2abn7zdrf4y.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/8/g/v/-original-imagg2abtmhwsgpm.jpeg?q=70'

            ]

        }
    ];
    const filteredproduct = products.find(product => product.name === params.productName);
    console.log(filteredproduct);
    const [selectedImg,setselectedImg] = useState(filteredproduct.imgsrc);
    const updateImg = (thumnail) =>{
        setselectedImg(thumnail);
    }        
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-2">
                   {filteredproduct.thumnails.map((thumnail,index) => (
                   <div  className="border p-2 m-2" style={{cursor:'pointer'}} onClick={() => updateImg(thumnail)}><img src={thumnail} height='100px' ></img></div>
                   ))}
                </div>
                <div className="col-sm-4">
                    <img className="img-thumnail" height='500px' src={selectedImg} alt="selectedImg"/>
                </div>
                <div className="col-sm-6">
                    <h2>{filteredproduct.name}</h2>
                    <h3>{filteredproduct.price}</h3>
                    <ul>
                        {filteredproduct.specifications.map((specification, index) => (
                            <li key={specification}>{specification}</li>
                        ))}
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}
export default Productdetails;