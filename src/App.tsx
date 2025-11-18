// import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Select } from "@/components/ui/select"
// import { Switch } from "@/components/ui/switch"
// import { Textarea } from "@/components/ui/textarea"
// import { Dialog } from "@/components/ui/dialog"
// import { DropdownMenu } from "@/components/ui/dropdown-menu"
// import { Tooltip } from "@/components/ui/tooltip"
// import { Card } from "@/components/ui/card"

// /* 
// npx shadcn@latest add navbar        # Top navigation bar
// npx shadcn@latest add tabs          # Tabbed views (optional)
// npx shadcn@latest add accordion     # Expandable sections (like settings or filters)

// npx shadcn@latest add avatar        # User profile pictures
// npx shadcn@latest add badge         # Status indicators (online/offline, new notifications)
// npx shadcn@latest add progress      # Loading bars or progress indicators
// npx shadcn@latest add skeleton      # Loading placeholders for posts
// npx shadcn@latest add separator     # Visual dividers
// */


// function App() {

//   return (
//     <>
//       <div className="p-8 text-center">
//         <h1 className="text-4xl font-bold text-red-500">Hello, Tailwind + Vite!</h1>
//         <Button>Click me</Button>
//         <Checkbox></Checkbox>
//         <Input></Input>
//         <Label>Hrelo</Label>
//         <Select>fef</Select>
//         <Switch></Switch>
//         <Textarea></Textarea>
//         <Dialog>Wioah</Dialog>
//         <DropdownMenu>He</DropdownMenu>
//         <Tooltip></Tooltip>
//         <Card>fwfw</Card>
//       </div>
//     </>
//   )
// }

// export default App

import { Routes, Route } from 'react-router-dom'
import Landing from './pages/FrontPorch/Landing'
import Login from './pages/FrontPorch/Login'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
