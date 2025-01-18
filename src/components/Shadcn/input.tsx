'use client'

import {ComponentProps,forwardRef, useState} from "react"
import { Button } from '@/components/Shadcn/button'
import { cn } from "@/lib/utils"
import EyeOpen from "@/assets/icons/EyeOpen.svg"
import EyeNone from "@/assets/icons/EyeNone.svg"

const PasswordInput = forwardRef<HTMLInputElement, ComponentProps<"input">>(({ className, ...props }, ref) => {
	const [showPassword, setShowPassword] = useState(false)
	const disabled = props.value === '' || props.value === undefined || props.disabled

	return (
		<div className="relative">
			<Input
				type={showPassword ? 'text' : 'password'}
				className={cn('hide-password-toggle pr-10', className)}
				ref={ref}
				{...props}
			/>
			<Button
				type="button"
				variant="ghost"
				size="sm"
				className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
				onClick={() => setShowPassword((prev) => !prev)}
				disabled={disabled}
			>
				{showPassword && !disabled ? (
					<EyeOpen className="h-4 w-4" aria-hidden="true" />
				) : (
					<EyeNone className="h-4 w-4" aria-hidden="true" />
				)}
				<span className="sr-only">{showPassword ? 'Hide password' : 'Show password'}</span>
			</Button>

			{/* hides browsers password toggles */}
			<style>{`
					.hide-password-toggle::-ms-reveal,
					.hide-password-toggle::-ms-clear {
						visibility: hidden;
						pointer-events: none;
						display: none;
					}
				`}</style>
		</div>
	)
})
PasswordInput.displayName = 'PasswordInput'



const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-base ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

interface InputComponent extends React.ForwardRefExoticComponent<
  ComponentProps<"input"> & React.RefAttributes<HTMLInputElement>
> {
  Password: typeof PasswordInput
}

const InputWithPassword = Input as InputComponent
InputWithPassword.Password = PasswordInput

export { InputWithPassword as Input }
