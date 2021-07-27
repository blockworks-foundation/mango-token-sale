import GradientText from './GradientText'

const HeroSection = () => {
  return (
    <section className="">
      <div className="max-w-6xl px-8 mx-auto">
        <div className="relative pt-8 md:pt-16 pb-2">
          <div className="mx-auto pb-4 text-left md:text-center lg:text-center">
            <h2 className="mb-8 text-3xl md:text-5xl lg:text-5xl text-white font-bold font-heading">
              Claim your stake in the <GradientText>Mango Dao</GradientText>
            </h2>
            <p className="font-normal text-xl md:text-2xl lg:text-2xl text-white text-opacity-70">
              Join us and contribute to the future direction of the Mango
              Protocol and its products.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
