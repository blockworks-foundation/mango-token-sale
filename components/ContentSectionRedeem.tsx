import Button from "./Button"

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
              <div className="col-span-3 lg:col-span-2">
                <div className="bg-bkg-3 border border-bkg-4 bg-feature-two bg-contain lg:bg-cover bg-bottom bg-no-repeat h-750 md:h-650 lg:h-650 w-full shadow-md rounded-xl overflow-hidden mx-auto">
                  <div className="py-4 px-8 mt-3">
                    <div className="flex flex-col mb-8">
                      <h2 className="text-white font-semibold text-xl tracking-wide mb-2">
                        Providing liquidity on Raydium
                      </h2>
                      <p className="text-white text-opacity-70 text-base">
                        The 48 hours consists of two 24 hour periods, the{' '}
                        <span className="text-mango-green text-base">
                          sale period
                        </span>{' '}
                        and the{' '}
                        <span className="text-blue-400 text-base">
                          grace period
                        </span>
                        . Only afterwards you will be able to redeem MNGO.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-3 lg:col-span-1">
                <div className="bg-bkg-3 border border-bkg-4 bg-feature-one bg-cover bg-bottom bg-no-repeat h-650 w-full shadow-md rounded-xl overflow-hidden mx-auto">
                  <div className="py-4 px-8 mt-3">
                    <div className="flex flex-col mb-8">
                      <h2 className="text-white font-semibold text-xl tracking-wide mb-2">
                        Governance on Solana
                      </h2>
                      <p className="text-white text-opacity-70 text-base">
                        During the
                        <span className="text-mango-green">
                          {' '}
                          sale period
                        </span>{' '}
                        you can deposit USDC into the vault. You can also change
                        this amount by withdrawing or depositing additional USDC
                        if you choose to.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 lg:col-span-1">
                <div className="bg-bkg-3 border border-bkg-4 bg-feature-four bg-cover bg-bottom bg-no-repeat h-650 w-full shadow-md rounded-xl overflow-hidden mx-auto">
                  <div className="py-4 px-8 mt-3">
                    <div className="flex flex-col mb-8">
                      <h2 className="text-white font-semibold text-xl tracking-wide mb-2">
                          Liqduitity incentives using MNGO
                      </h2>
                      <p className="text-white text-opacity-70 text-base">
                        Once the{' '}
                        <span className="text-blue-400">grace period</span> ends
                        the MNGO tokens will be unlocked for redemption. The
                        number of tokens you&apos;ll receive will be
                        proportional to your USDC contribution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-3 lg:col-span-2">
                <div className="bg-bkg-3 border border-bkg-4 bg-feature-three bg-contain lg:bg-cover bg-bottom bg-no-repeat h-650 w-full shadow-md rounded-xl overflow-hidden mx-auto">
                  <div className="py-4 px-8 mt-3">
                    <div className="flex flex-col mb-8">
                      <h2 className="text-white font-semibold text-xl tracking-wide mb-2">
                        Becoming a contributor
                      </h2>
                      <p className="text-white text-opacity-70 text-base mb-4">
                        We wanted to build a mechanism that is fair and
                        transparent for all participants. No private sale, no
                        backroom deals with VCs, all players are on a level
                        playing field. The mechanism is simple but robust. This
                        makes it easier to build, use, and more importantly,
                        harder to exploit.
                      </p>
                      <p className="text-white text-opacity-70 text-base">
                        All you need to do, is decide how much you contribute
                        and how much you value MNGO. If the sale price is too
                        high for you, you can still withdraw during the{' '}
                        <span className="text-blue-400">grace period</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="bg-bkg-3 border border-bkg-4 rounded-xl shadow-md overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4 mt-8">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">What are you waiting for?</span>
              </h2>
              <p className="mt-4 text-xl leading-6 text-white text-opacity-50">
                Trade with the best in class user interface
                for&nbsp;traders,&nbsp;built&nbsp;by&nbsp;traders.{' '}
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
              className="transform translate-x-2 translate-y-2 rounded-md object-cover object-left-top sm:translate-x-12 lg:translate-y-16"
              src="../img/cta_img.png"
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
