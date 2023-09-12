import { useContext, type Context } from 'react'

type CustomMessage = string | ((displayName?: string) => string)

export const useSafeContext = <T>(
  unsafeContext: Context<T>,
  customMessage?: CustomMessage,
) => {
  const context = useContext<T>(unsafeContext)

  if (!context) {
    const displayName = unsafeContext.displayName

    let errorMessage: string

    switch (typeof customMessage) {
      case 'string':
        errorMessage = customMessage
        break

      case 'function':
        errorMessage = customMessage(displayName)
        break

      default: {
        const contextName = displayName || 'a context'
        errorMessage = `You are trying to use ${contextName} outside of the provider`
        break
      }
    }

    throw new Error(errorMessage)
  }

  return context as NonNullable<T>
}
