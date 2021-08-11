import Button from './Button'
import LinkLeft from './LinkLeft'
import GradientText from "./GradientText"

const ContentSectionRedeem = () => {
  return (
    <>
      {/* Section 2 */}
      <div className="bg-bkg-2 transform -skew-y-3 pt-16 pb-0 mb-16 -mt-32 z-0 overflow-hidden">
        <div className="px-8 pt-24 pb-16 z-0 transform skew-y-3">
          <div className="max-w-7xl mx-auto py-16">
            <div className="max-w-4xl mb-24 mx-auto text-center">
              <h2 className="mb-4 text-3xl md:text-4xl lg:text-4xl text-white font-bold font-heading">
                Okay so you have <GradientText>MNGO</GradientText>, now what?
              </h2>
              <p className="text-xl md:text-2xl lg:text-2xl text-white text-opacity-70">
                Here are three steps to get more MNGO awarded by the DAO and support the protocol on a deeper level.
              </p>
            </div>
            <section className="">
              <div className="grid grid-cols-3 gap-6 mb-24 pb-16">
              <div className="col-span-3 lg:col-span-1">
                  <div className="bg-bkg-3 border border-bkg-4 bg-redeem-three bg-contain bg-bottom bg-no-repeat h-650 w-full shadow-md rounded-xl overflow-hidden mx-auto">
                    <div className="py-4 px-8 mt-3">
                      <div className="flex flex-col mb-8">
                        <h2 className="text-white font-semibold text-xl tracking-wide mb-2">
                          Life is cool in the Raydium pool.
                        </h2>
                        <p className="mb-2 text-white text-opacity-70 text-base">
                        MNGO needs decent liquidity on the serum dex orderbook to be added on Mango v3. 
                        As no deals were done with market makers to provide liquidity, it will be up to 
                        us MNGO holders to provide it on our own with a Raydium pool. 
                        <br />
                        <br />

                        Remaining contributor tokens not spent before the sale will be dropped in a fusion pool.
                        </p>
                        <LinkLeft>Jump in Now</LinkLeft>

                      </div>
                    </div>
                  </div>
                </div>


                <div className="col-span-3 lg:col-span-1">
                  <div className="bg-bkg-3 border border-bkg-4 bg-redeem-two bg-cover bg-bottom bg-no-repeat h-650 w-full shadow-md rounded-xl overflow-hidden mx-auto">
                    <div className="py-4 px-8 mt-3">
                      <div className="flex flex-col mb-8">
                        <h2 className="text-white font-semibold text-xl tracking-wide mb-2">
                          How much Tabassco is inside you?
                        </h2>
                        <p className="mb-2 text-white text-opacity-70 text-base">
                         Become a market maker and provide liquidity on the Mango v3 Perpetual Futures. It&apos;s easy to to get started with our example market making bot and tweak to your needs.
                      
                        <br />
                       <br />
                          The DAO will decide on liquidity incentives for market making.
                        </p>
                        <a href="https://docs.mango.markets/mango-v3/market-making-bot-python">
                        <LinkLeft>Become a Market Maker</LinkLeft>

                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-3 lg:col-span-1">
                  <div className="bg-bkg-3 border border-bkg-4 bg-redeem-four bg-contain bg-bottom bg-no-repeat h-750 md:h-650 lg:h-650 w-full shadow-md rounded-xl overflow-hidden mx-auto">
                    <div className="py-4 px-8 mt-3">
                      <div className="flex flex-col mb-8">
                        <h2 className="text-white font-semibold text-xl tracking-wide mb-2">
                          Build the best Mango.
                        </h2>
                        <p className="mb-2 text-white text-opacity-70 text-base">
                        This is by far the hardest and most rewarding method. 
                        Build a project that builds on top of Mango, help grow the protocol. 
                        <br />
                        <br />
                        The bar is high and quality is of the utmost importance. 
                        We believe that the reward given out by the DAO should be equally high.
                        </p>
                        <LinkLeft>Learn More</LinkLeft>

                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </section>

          </div>
        </div>
        <div className="transform skew-y-3">

            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-4 text-3xl md:text-4xl lg:text-4xl text-white font-bold font-heading">
              With great power comes great responsibility.
                            </h2>
              <p className="text-lg md:text-2xl lg:text-lg text-white text-opacity-70">
              Mango is the first DAO on solana to use on-chain governance to interact with the Mango DAO. As MNGO holders we all have a stake in driving the future of Mango. 
              </p>
              <br />
            
              <p className="text-lg md:text-2xl lg:text-lg text-white text-opacity-70">
              The governance mechanism is already functional and MNGO tokens are used to both bring proposals to the DAO and vote on said proposals. There&apos;ll be kinks to iron out as we get up and running but as DAO members, we are all in this together.
              </p>
              <div className="py-12">
              <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://discord.gg/67jySBhxrgs"
                    >
                      <Button>Get Involved</Button>
                    </a>
                    </div>
                    <div className="flex relative pt-12 lg:top-4 md:top-4 sm:top-4 xs:top-4">
                      <img className="h-96" alt="modals" src="../img/redeem1.png" />
                    </div>
            </div>
        </div>

      </div>

      <div className="mx-auto max-w-7xl py-16 my-16">
      <div className="bg-bkg-3 border border-bkg-4 rounded-xl shadow-md overflow-hidden lg:grid lg:grid-cols-2 lg:gap-2 mt-8 bg-bg-texture bg-cover bg-bottom bg-no-repeat">
      <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20 h-350">
                <div className="lg:self-center">
                  <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    <span className="block">The community that lives on Discord.</span>
                  </h2>
                  <p className="mt-4 text-xl leading-6 text-white text-opacity-50">
                    Join us in chat, we&apos;re always available and ready to answer any questions. 
                  </p>
                  <div className="py-8">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://discord.gg/67jySBhxrgs"
                    >
                      <Button>Get Involved</Button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
                <img
                  className="transform translate-x-2 translate-y-2 rounded-xl shadow-lg object-cover object-left-top sm:translate-x-12 lg:translate-y-16"
                  src="../img/redeem5.png"
                  alt="mango markets"
                />
              </div>
              </div>

            </div>

    </>
  )
}

export default ContentSectionRedeem
