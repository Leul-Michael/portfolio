import { create } from "zustand"

type StoreProps = {
  hoverdId: string
  setHoverdId: (input: string) => void
  hoverdBlogId: string
  setHoverdBlogId: (input: string) => void
  projectBg: string
  setProjectBg: (input: string) => void
}

const useStoryStore = create<StoreProps>((set) => ({
  hoverdId: "",
  setHoverdId: (input) => set(() => ({ hoverdId: input })),
  hoverdBlogId: "",
  setHoverdBlogId: (input) => set(() => ({ hoverdBlogId: input })),
  projectBg: "bg-background",
  setProjectBg: (input) => set(() => ({ projectBg: input })),
}))

export const useHoverdId = () => useStoryStore((state) => state.hoverdId)
export const useSetHoverdId = () => useStoryStore((state) => state.setHoverdId)
export const useHoverdBlogId = () =>
  useStoryStore((state) => state.hoverdBlogId)
export const useSetHoverdBlogId = () =>
  useStoryStore((state) => state.setHoverdBlogId)
export const useProjectBg = () => useStoryStore((state) => state.projectBg)
export const useSetProjectBg = () =>
  useStoryStore((state) => state.setProjectBg)
