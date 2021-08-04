import Button from "./Button"
//import GradientText from "./GradientText"

const ContentSectionRedeem = () => {
  return (
    <>
      {/* Section 2 */}
      <div className="bg-bkg-2 transform -skew-y-3 pt-16 pb-16 mb-16 -mt-32 z-0">
      <div className="px-8 pt-24 pb-16 z-0 transform skew-y-3">
        <div className="max-w-7xl mx-auto py-16">
          <div className="max-w-4xl mb-24 mx-auto text-center">
            <h2 className="mb-4 text-3xl md:text-4xl lg:text-4xl text-white font-bold font-heading">
              Now what?
            </h2>
            <p className="text-xl md:text-2xl lg:text-2xl text-white text-opacity-70">
              The journey has just begun, here&apos;s what happens next
            </p>
          </div>
          <section className="">
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="col-span-3 lg:col-span-1">
                <div className="bg-bkg-3 border border-bkg-4 bg-redeem-one bg-contain bg-bottom bg-no-repeat h-750 md:h-650 lg:h-650 w-full shadow-md rounded-xl overflow-hidden mx-auto">
                  <div className="py-4 px-8 mt-3">
                    <div className="flex flex-col mb-8">
                      <h2 className="text-white font-semibold text-xl tracking-wide mb-2">
                        With great power comes great responsibility
                      </h2>
                      <p className="text-white text-opacity-70 text-base">
                        SteWe are the first DAO to unitlize solana&apos;s governance tools. {' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-3 lg:col-span-2">
                <div className="bg-bkg-3 border border-bkg-4 bg-redeem-three bg-cover bg-bottom bg-no-repeat h-650 w-full shadow-md rounded-xl overflow-hidden mx-auto">
                  <div className="py-4 px-8 mt-3">
                    <div className="flex flex-col mb-8">
                      <h2 className="text-white font-semibold text-xl tracking-wide mb-2">
                        Getting MNGO on V3
                      </h2>
                      <p className="text-white text-opacity-70 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 lg:col-span-2">
                <div className="bg-bkg-3 border border-bkg-4 bg-redeem-two bg-cover bg-bottom bg-no-repeat h-650 w-full shadow-md rounded-xl overflow-hidden mx-auto">
                  <div className="py-4 px-8 mt-3">
                    <div className="flex flex-col mb-8">
                      <h2 className="text-white font-semibold text-xl tracking-wide mb-2">
                          Everyone can become a mango market maker
                      </h2>
                      <p className="text-white text-opacity-70 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-3 lg:col-span-1">
                <div className="bg-bkg-3 border border-bkg-4 bg-redeem-four bg-contain lg:bg-cover bg-bottom bg-no-repeat h-650 w-full shadow-md rounded-xl overflow-hidden mx-auto">
                  <div className="py-4 px-8 mt-3">
                    <div className="flex flex-col mb-8">
                      <h2 className="text-white font-semibold text-xl tracking-wide mb-2">
                        Road to decentralization
                      </h2>
                      <p className="text-white text-opacity-70 text-base mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="bg-bkg-3 border border-bkg-4 rounded-xl shadow-md overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4 mt-8">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20 h-350">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Join the community</span>
              </h2>
              <p className="mt-4 text-xl leading-6 text-white text-opacity-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
              </p>
              <div className="py-8">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://trade.mango.markets"
                >
                  <Button>Start trading now</Button>
                </a>
              </div>
            </div>
          </div>
          <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <img
              className="h-550 transform translate-x-2 translate-y-2 rounded-xl shadow-lg object-cover object-left-top sm:translate-x-12 lg:translate-y-16"
              src="../img/redeem5.png"
              alt="mango markets"
            />
          </div>
        </div>
        </div>
      </div>
      </div>
    </>    
  )
}

export default ContentSectionRedeem
