import GradientText from './GradientText'

const ContentSection = () => {
  return (
    <>
      <div className="bg-bkg-2 py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 mx-auto text-center">
            <h2 className="mb-4 text-3xl md:text-4xl lg:text-4xl text-white font-bold font-heading">
              How the token sale works
            </h2>
            <p className="text-xl md:text-2xl lg:text-2xl text-white text-opacity-70">
              Fairness and transparency for all participants.
            </p>
          </div>
          <section className="">
            <div className="grid grid-cols-4 gap-6">
              <div className="col-span-4">
                <div className="bg-bkg-3 border border-bkg-4 w-full shadow-md rounded-xl">
                  <div className="p-8">
                    <div className="flex flex-col">
                      <h2 className="text-white font-semibold text-xl tracking-wide mb-2">
                        The token sale will span 48 hours
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
                        .
                      </p>
                      <div className="flex flex-wrap overflow-hiddenm mt-8">
                        <div className="w-full mb-4 lg:mb-0 overflow-hidden lg:w-1/2 pr-4">
                          <p className="mb-2">
                            <span className="font-semibold text-mango-green text-xl">
                              Sale period{' '}
                              <span className="font-normal text-white text-opacity-50 text-base">
                                (first 24 hours)
                              </span>
                            </span>
                          </p>
                          <p className="text-base text-white text-opacity-70">
                            In the first 24 hours, you may deposit or withdraw
                            your USDC from the vault. During the sale period,
                            the MNGO price can fluctuate.
                          </p>
                        </div>
                        <div className="w-full overflow-hidden lg:w-1/2 pr-4">
                          <p className="mb-2">
                            <span className="font-semibold text-blue-400 text-xl">
                              Grace period{' '}
                              <span className="font-normal text-white text-opacity-50 text-base">
                                (second 24 hours)
                              </span>
                            </span>
                          </p>
                          <p className="text-base text-white text-opacity-70">
                            After 24 hours, deposits will be restricted and only
                            withdrawals allowed. During the grace period, the
                            MNGO price can only go down.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-4 lg:col-span-2">
                <div className="bg-bkg-3 border border-bkg-4 w-full shadow-md rounded-xl lg:h-56">
                  <div className="flex items-start p-8">
                    <img
                      alt=""
                      width="156"
                      height="156"
                      src="/img/usdc-vault.png"
                      className="mr-1"
                    />
                    <div className="flex flex-col">
                      <h2 className="text-white font-semibold text-xl tracking-wide mb-2">
                        1. Deposit your USDC
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
              <div className="col-span-4 lg:col-span-2">
                <div className="bg-bkg-3 border border-bkg-4 w-full shadow-md rounded-xl lg:h-56">
                  <div className="flex items-start p-8">
                    <img
                      alt=""
                      width="148"
                      height="148"
                      src="/img/mango-vault.png"
                      className="mr-4"
                    />
                    <div className="flex flex-col">
                      <h2 className="text-white font-semibold text-xl tracking-wide mb-2">
                        2. Redeem you MNGO
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
              <div className="col-span-4">
                <div className="bg-bkg-3 border border-bkg-4 w-full shadow-md rounded-xl">
                  <div className="p-8">
                    <div className="flex flex-col">
                      <h2 className="text-white font-semibold text-xl tracking-wide mb-2">
                        Why does it work this way?
                      </h2>
                      <p className="text-white text-opacity-70 text-base mb-4">
                        We wanted to build a mechanism that is fair and
                        transparent for all participants. No private sale, no
                        backroom deals with VCs, all players are on a level
                        playing field.
                      </p>
                      <p className="text-white text-opacity-70 text-base">
                        The mechanism is simple but robust. This makes it easier
                        to build, use, and more importantly, harder to exploit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="bg-bkg-1 py-24 px-8">
        <div className="mb-16 max-w-4xl mx-auto text-center">
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-4xl text-white font-bold font-heading">
            Why release <GradientText>MNGO</GradientText> token?
          </h2>
          <p className="text-xl md:text-2xl lg:text-2xl text-white text-opacity-70">
            The MNGO token in its inception will serve 3 primary purposes.
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="max-w-max lg:max-w-6xl mx-auto">
            <div className="relative">
              <div className="lg:grid lg:grid-cols-3 lg:gap-6">
                <div className="lg:col-span-1">
                  <h2 className="text-2xl mb-4 leading-tight font-semibold font-heading">
                    Capitalize the Insurance Fund
                  </h2>
                  <p className="mb-8 text-base text-white text-opacity-70 leading-relaxed">
                    The Mango protocol relies on lenders to provide capital for
                    the others to use for trading and borrowing. The capital in
                    the Insurance Fund will be used to compensate lenders in the
                    unlikely event they incur losses.
                  </p>
                </div>
                <div className="lg:col-span-1">
                  <h2 className="text-2xl mb-4 leading-tight font-semibold font-heading">
                    Govern the Mango DAO
                  </h2>
                  <p className="mb-8 text-base text-white text-opacity-70 leading-relaxed">
                    MNGO tokens represent a direct stake in the Mango DAO. The
                    future direction of the Mango Protocol will be decided by
                    voting on proposals using MNGO tokens as the voting
                    mechanism.
                  </p>
                </div>
                <div className="lg:col-span-1">
                  <h2 className="text-2xl mb-4 leading-tight font-semibold font-heading">
                    Incentivize liquidity
                  </h2>
                  <p className="mb-8 text-base text-white text-opacity-70 leading-relaxed">
                    Bootstraping liquidity is important in a new trading system.
                    Incentivising market makers and other liquidity providers
                    with MNGO tokens will benefit the protocol and its
                    participants.
                  </p>
                </div>
              </div>
              <div className="mt-10 p-8 bg-bkg-3 border border-bkg-4 shadow-md rounded-xl">
                <h3 className="font-bold text-xl my-2">Token distribution</h3>

                <div className="grid grid-cols-12 mt-4 py-1 px-1 rounded-md shadow-md bg-mango-med-dark">
                  <div className="col-span-8 bg-mango-green text-center rounded-l-sm py-1">
                    <span className="text-xs px-1 font-bold text-white">
                      80%
                    </span>
                  </div>
                  <div className="col-span-2 bg-mango-yellow text-center  py-1">
                    <span className="text-xs px-1 font-bold text-white">
                      10%
                    </span>
                  </div>
                  <div className="col-span-1 bg-mango-red text-center  py-1">
                    <span className="text-xs px-1 font-bold text-white">
                      5%
                    </span>
                  </div>
                  <div className="col-span-1 bg-blue-400 text-center rounded-r-sm  py-1">
                    <span className="text-xs px-1 font-bold text-white">
                      5%
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-4 mt-4">
                  <div className="col-span-2 md:col-span-2 lg:col-span-1  m-1 p-1">
                    <p className="text-mango-green font-bold text-base my-2">
                      Mango DAO
                    </p>
                    <p className="text-white text-opacity-70">
                      80% of MNGO tokens will be locked in a smart contract,
                      only accessible via DAO governance votes.
                    </p>
                  </div>
                  <div className="col-span-2 md:col-span-2 lg:col-span-1 m-1 p-1">
                    <p className="text-mango-yellow font-bold text-base my-2">
                      Liquidity incentives
                    </p>
                    <p className="text-white text-opacity-70">
                      10% will be used to incentivize market makers and
                      liquidity providers to be active in the system.
                    </p>
                  </div>
                  <div className="col-span-2 md:col-span-2 lg:col-span-1  m-1 p-1">
                    <p className="text-mango-red font-bold text-base my-2">
                      Insurance Fund
                    </p>
                    <p className="text-white text-opacity-70">
                      5% of MNGO tokens will be used to capitalize the Insurance
                      Fund that will protect lenders in the Mango Protocol.
                    </p>
                  </div>
                  <div className="col-span-2 md:col-span-2 lg:col-span-1  m-1 p-1">
                    <p className="text-blue-400 font-bold text-base my-2">
                      Team/contributor tokens
                    </p>
                    <p className="text-white text-opacity-70">
                      5% will be distributed to the team and early contributors.
                      These tokens are unlocked.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-bkg-2 px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="mb-4 text-3xl md:text-4xl lg:text-4xl text-white font-bold font-heading">
              Transparency builds trust
            </h2>
            <p className="text-xl md:text-2xl lg:text-2xl text-white text-opacity-70">
              There are risks in participating in the token sale. It&apos;s
              important you understand them before deciding to commit your
              funds.
            </p>
          </div>

          <div className="grid grid-cols-7 grid-rows-2 gap-6 mx-auto">
            <div className="col-span-3 p-8 bg-bkg-3 border border-bkg-4 rounded-xl h-auto w-auto z-10 shadow-md">
              <h3 className="text-white font-semibold text-xl tracking-wide text-2xl mb-4">
                Unaudited smart contracts
              </h3>
              <p className="mb-2 text-white text-opacity-70 text-base">
                We take great care and forethought in the way we build our smart
                contracts, we opensource all code once ready and work with many
                industry leading developers during creation.
              </p>
              <p className="text-white text-opacity-70 text-base">
                While this is the case we cannot guarantee they are free of
                potential exploits. Users should understand the risks when
                participating today and know what they are contribtuing too.
              </p>
            </div>
            <div className="col-span-4 row-span-2 p-8 bg-bkg-3 border border-bkg-4 rounded-xl h-auto w-auto z-10 shadow-md">
              <h3 className="text-white font-semibold text-xl tracking-wide text-2xl mb-4">
                New token sale mechanism
              </h3>
              <p className="mb-2 text-white text-opacity-70 text-base">
                The Mango token sale was designed to be as fair as possible for
                all participants. However, it is possible that one or more
                participants with large amounts of capital could discourage
                others from participating in the token sale.
              </p>
              <p className="mb-2 text-white text-opacity-70 text-base">
                During the sale period (first 24 hours), these participants
                could deposit very large amounts of USDC. This would drive up
                the price of the token and potentially discourage others from
                participating in the sale.
              </p>
              <p className="text-white text-opacity-70 text-base">
                Then, during the last minute of the withdrawal phase, these
                large participants could withdraw much of their USDC, thus
                receiving a much lower price, depending on how successful they
                were at discouraging others.
              </p>
            </div>
            <div className="col-span-3 p-8 bg-bkg-3 border border-bkg-4 rounded-xl h-auto w-auto z-10 shadow-md">
              <h3 className="text-white font-semibold text-xl tracking-wide text-2xl mb-4">
                Not fully decentralzed; yet
              </h3>
              <p className="mb-2 text-white text-opacity-70 text-base">
                Whilst the path to becoming decentralized is kicking off with
                the token sale, at inception the team will have control over the
                direction of the protocol until the governance mechanism is
                estabilshed and tools built out.
              </p>
              <p className="mb-2 text-white text-opacity-70 text-base">
                Contributers must trust the mango team until full
                decentralization is reached.
              </p>
              <p className="text-white text-opacity-70 text-base">
                We offer full transparency in during this phase of transition
                and will commit to creating a fair voting system for those
                participating in DAO votes in the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentSection
