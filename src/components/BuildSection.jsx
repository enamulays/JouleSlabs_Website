
import '../style/Build.css'

function BuildSection() {


  return (
    <div>
      <section className='build'>
        <div className='build-wrapper'>
          <div className='build-wrapper-inner'>
            <div className='build-left'>
              <div className='build-text'>
                <h1>Build Impactful Products Faster Than The Competition Business Analysis</h1>
                <p>{buildLeftP}</p>
                <a href="https://www.google.com/">
                  <h3>Learn More</h3>
                  <img src='./image/servicesicon.svg' alt='servicesicon' />
                </a>
              </div>
            </div>
            {/* Build Right Section */}
            <div className='build-right'>
              <div className='build-r1 build-text'>
                <h2>Build Impactful Products Faster Than The CompetitionBusiness Analysis</h2>
                <p>{buildRight1}</p>
                <a href="https://www.google.com/">
                  <h3>Learn More</h3>
                  <img src='./image/servicesicon.svg' alt='servicesicon' />
                </a>
              </div>
              <div className='build-r2 build-text'>
                <h2>Build Impactful Products Faster Than The CompetitionBusiness Analysis</h2>
                <p>{buildRight2}</p>
                <a href="https://www.google.com/">
                  <h3>Learn More</h3>
                  <img src='./image/servicesicon.svg' alt='servicesicon' />
                </a>
              </div>
              <div className='build-r3 build-text'>
                <h2>Build Impactful Products Faster Than The CompetitionBusiness Analysis</h2>
                <p>{buildRight3}</p>
                <a href="https://www.google.com/">
                  <h3>Learn More</h3>
                  <img src='./image/servicesicon.svg' alt='servicesicon' />
                </a>
              </div>
              <div className='build-r4 build-text'>
                <h2>Build Impactful Products Faster Than The CompetitionBusiness Analysis</h2>
                <p>{buildRight4}</p>
                <a href="https://www.google.com/">
                  <h3>Learn More</h3>
                  <img src='./image/servicesicon.svg' alt='servicesicon' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BuildSection


const buildLeftP = "At JoulesLabs, we empower businesses to outpace their competition by accelerating the development of impactful products. Our expert team leverages cutting-edge technologies and streamlined processes to deliver high-quality solutions efficiently. With a focus on innovation and agility, we help our clients achieve their goals faster and stay ahead in today's dynamic market landscape."

const buildRight1 = 'Get precisely what you need, when you need it. Our custom project service delivers tailored software solutions, perfectly aligned with your requirements and timeline.'
const buildRight2 = 'Skip the hiring hassle. With our dedicated team service, we assemble skilled professionals tailored to your project, ensuring a cohesive, efficient team focused on your success'
const buildRight3 = 'Expand your offerings effortlessly. Our white-label service lets you provide top-tier software solutions under your brand, seamlessly integrating our expertise into your portfolio.'
const buildRight4 = 'Unleash growth through collaboration. Partner with us for strategic guidance, ongoing support, and innovative solutions, ensuring mutual success and driving innovation.'