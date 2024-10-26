export default function Register() {
  return (
    <div className="min-h-screen w-full p-32">
      <div className="flex items-center justify-center p-6">
        <form className="w-full" action="#" method="post">
          <div className="mx-auto mb-6 max-w-sm">
            <h3 className="text-center text-3xl font-semibold">
              Create your PIN Code
            </h3>
          </div>
          <div className="flex items-center justify-center gap-6">
            <div className="m-1">
              <input
                type="text"
                inputMode="numeric"
                min="0"
                maxLength={1}
                className="text-md h-12 w-12 rounded-lg border border-gray-300 bg-[#EBE4E4] text-center font-semibold"
              />
            </div>
            <div className="m-1">
              <input
                type="text"
                inputMode="numeric"
                min="0"
                maxLength={1}
                className="text-md h-12 w-12 rounded-lg border border-gray-300 bg-[#EBE4E4] text-center font-semibold"
              />
            </div>
            <div className="m-1">
              <input
                type="text"
                inputMode="numeric"
                min="0"
                maxLength={1}
                className="text-md h-12 w-12 rounded-lg border border-gray-300 bg-[#EBE4E4] text-center font-semibold"
              />
            </div>
            <div className="m-1">
              <input
                type="text"
                inputMode="numeric"
                min="0"
                maxLength={1}
                className="text-md h-12 w-12 rounded-lg border border-gray-300 bg-[#EBE4E4] text-center font-semibold"
              />
            </div>
            <div className="m-1">
              <input
                type="text"
                inputMode="numeric"
                min="0"
                maxLength={1}
                className="text-md h-12 w-12 rounded-lg border border-gray-300 bg-[#EBE4E4] text-center font-semibold"
              />
            </div>
            <div className="m-1">
              <input
                type="text"
                inputMode="numeric"
                min="0"
                maxLength={1}
                className="text-md h-12 w-12 rounded-lg border border-gray-300 bg-[#EBE4E4] text-center font-semibold"
              />
            </div>
          </div>
          <div className="mx-36 mt-5">
            <p className="text-center">
              A verification PIN code adds an extra layer of security in an
              eCommerce system by ensuring only the authorized user can complete
              a transaction. After checkout, a one-time PIN is generated and
              sent to the user, who must enter it to verify their identity and
              prevent unauthorized purchases.
            </p>
          </div>
          <div className="mx-auto mb-6 flex max-w-lg justify-center">
            <button
              type="button"
              className="my-4 w-[200px] items-center gap-x-2 rounded-xl border border-transparent bg-[#6F99EA] px-6 py-3 text-center text-sm font-medium text-white hover:bg-blue-400 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
