export const firebaseConfig = (JSON.parse(
  atob(
    'eyJhcGlLZXkiOiJBSXphU3lDRTNLUWJhVktqY3hjRWJ5UThXSjQwTVhLM3Y2bGQ0ZFkiLCJhdXRoRG9tYWluIjoiZmlyZXN0b3JlLXJlc3QtNmVlYzUuZmlyZWJhc2VhcHAuY29tIiwicHJvamVjdElkIjoiZmlyZXN0b3JlLXJlc3QtNmVlYzUiLCJzdG9yYWdlQnVja2V0IjoiZmlyZXN0b3JlLXJlc3QtNmVlYzUuYXBwc3BvdC5jb20iLCJtZXNzYWdpbmdTZW5kZXJJZCI6Ijk3ODIwMDMwNzYzOCIsImFwcElkIjoiMTo5NzgyMDAzMDc2Mzg6d2ViOjNiZTUyZjcwYjNhOGY5NGY4ZjQzMTcifQ=='
  )
) as unknown) as {
  apiKey: string
  authDomain: string
  projectId: string
  storageBucket: string
  messagingSenderId: '978200307638'
  appId: string
}
