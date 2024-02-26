import React from 'react'

export function ConfirmDialog(props: {
  title: string
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  children: string
}) {
  return (
    <>
      {props.isOpen && (
        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <div
              className='fixed inset-0 transition-opacity'
              aria-hidden='true'
            >
              <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
            </div>

            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'
            >
              &#8203;
            </span>

            <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
              <div className='px-4 pt-5 pb-4'>
                <h3
                  className='text-lg leading-6 font-medium text-gray-900'
                  id='modal-title'
                >
                  {props.title}
                </h3>
                {props.children}
              </div>
              <div className='px-4 py-3 flex flex-row-reverse space-x-2 space-x-reverse'>
                <button
                  onClick={props.onConfirm}
                  type='button'
                  className='btn btn-info text-white'
                >
                  Confirm
                </button>
                <button
                  onClick={props.onClose}
                  type='button'
                  className='btn btn-outline btn-info'
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
