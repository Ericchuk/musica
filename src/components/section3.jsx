import audioImg1 from './images/Rectangle 14.svg'
import audioImg2 from './images/Rectangle 15.svg'
import audioImg3 from './images/Rectangle 16.svg'
import audioImg4 from './images/Rectangle 17.svg'
import audioImg5 from './images/Rectangle 18.svg'
import audioImg6 from './images/Rectangle 19.svg'
import audioImg7 from './images/Rectangle 20.svg'


export default function SectionContent(){
    const release = [
        {id:0, img:audioImg1, title: "Life in a bubble"},
        {id:1, img:audioImg2, title: "Mountain"},
        {id:2, img:audioImg3, title: "Limits"},
        {id:3, img:audioImg4, title: "Everything's black"},
        {id:4, img:audioImg5, title: "Cancelled"},
        {id:5, img:audioImg6, title: "Nomad"},
        {id:6, img:audioImg7, title: "Blind"},
    ]

    const eachRelease = release.map((item) => {
        return(
            <div key={item.id}>
                <img src={item.img} alt="audioImg1" />
                <p>{item.title}</p>
            </div>
        )
    })
    return(
        <section className='release popular'>
            <h2>Popular in your area.</h2>
            <aside>
                {eachRelease}
            </aside>
        </section>  
    )
};

