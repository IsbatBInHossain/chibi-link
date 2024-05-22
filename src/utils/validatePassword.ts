export function validatePassword(password: string): boolean {
  // Regular expression for password complexity
  const complexityRegex = /^(?=.*[0-9])(?=.*\W)(?!.* ).{8,}$/

  if (!complexityRegex.test(password)) {
    throw new TypeError(
      'Password must be at least 8 characters and contain at least a numbers, and a symbols. Spaces are not allowed.'
    )
  }

  return true
}
