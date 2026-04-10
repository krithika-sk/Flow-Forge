export const authOptions = {}

export async function auth() {
  return {
    user: {
      id: "demo-user",
      name: "Demo User",
      email: "demo@test.com"
    }
  }
}

export async function getServerSession() {
  return auth()
}

// ✅ ADD THIS (important)
export const handlers = {
  GET: async () => {
    return new Response(JSON.stringify({ user: { name: "Demo User" } }), {
      status: 200,
    });
  },
  POST: async () => {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  },
};