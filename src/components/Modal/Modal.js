import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export default function Modal({ children, open }) {
  const dialog = useRef()

  useEffect(() => {
    if (open) dialog.current.showModal()
    else dialog.current.close()
  }, [open])

  return createPortal(
    <dialog className="text-center p-5 rounded shadow z-50 fixed mt-24 " ref={dialog}>
      {children}
    </dialog>,
    document.getElementById('modal')
  )
}
