import Button from "./Button"
import LinkLeft from "./LinkLeft"
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
            <div className="grid grid-cols-4 gap-6 mb-6">
              <div className="col-span-2">
                <div className="bg-bkg-3 border border-bkg-4 bg-redeem-one bg-contain bg-bottom bg-no-repeat h-750 md:h-650 lg:h-650 w-full shadow-md rounded-xl overflow-hidden mx-auto">
                  <div className="py-4 px-8 mt-3">
                    <div className="flex flex-col mb-8">
                      <h2 className="text-white font-semibold text-xl tracking-wide mb-2">
                        With great power comes great responsibility
                      </h2>
                      <p className="text-white text-opacity-70 text-base">
                        Mango is the first DAO on solana to use on-chain governance, as mango holders our highest responsibility is to command the DAO. We need to figure out how this will work, we need to figure out the rules ourselves. We&apos;re building the constitution. {' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="bg-bkg-3 border border-bkg-4 bg-redeem-three bg-cover bg-bottom bg-no-repeat h-650 w-full shadow-md rounded-xl overflow-hidden mx-auto">
                  <div className="py-4 px-8 mt-3">
                    <div className="flex flex-col mb-8">
                      <h2 className="text-white font-semibold text-xl tracking-wide mb-2">
                        Getting MNGO on V3
                      </h2>
                      <p className="text-white text-opacity-70 text-base">
                        MNGO should be traded on mango v3 at launch, that means mango needs decent liquidity on-par with other tokens. There are no backroom deals, no one hired a market maker to provide liquidity so we need to come together and provide liquidity in raydium pool.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-6">
              <div className="col-span-2">
                <div className="bg-bkg-3 border border-bkg-4 bg-redeem-two bg-cover bg-bottom bg-no-repeat h-650 w-full shadow-md rounded-xl overflow-hidden mx-auto">
                  <div className="py-4 px-8 mt-3">
                    <div className="flex flex-col mb-8">
                      <h2 className="text-white font-semibold text-xl tracking-wide mb-2">
                          Everyone can become a mango market maker
                      </h2>
                      <p className="text-white text-opacity-70 text-base">
                          Provide liquidity on the upcoming perp markets, the DAO will vote on liquidity incentives for perp markets,
                      </p>
                      <LinkLeft>link to SDK  "mango-client-v3"</LinkLeft>
                      <LinkLeft>link to docs with devnet tutorial</LinkLeft>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="bg-bkg-3 border border-bkg-4 bg-redeem-four bg-contain lg:bg-cover bg-bottom bg-no-repeat h-650 w-full shadow-md rounded-xl overflow-hidden mx-auto">
                  <div className="py-4 px-8 mt-3">
                    <div className="flex flex-col mb-8">
                      <h2 className="text-white font-semibold text-xl tracking-wide mb-2">
                        Road to decentralization
                      </h2>
                      <p className="text-white text-opacity-70 text-base mb-4">
                        Starts off with the feeling (heres what we've done to keep mango decentralized) ends with the CTA of (heres how you can help, heres what we need) 
                      </p>
                      <p>rough tech roadmap with link to trello</p>
                      <p>if you can help us build it, send us proposals the DAO will vote on grants</p>


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
                <span className="block">Join the Discord</span>
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
