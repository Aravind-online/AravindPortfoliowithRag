"""
Vercel serverless entry point for the FastAPI backend.

This module imports the FastAPI app from api.py and exposes it
as `app` so that @vercel/python can serve it as an ASGI handler.
"""

import sys
import os

# Make the backend directory importable (the file lives in backend/api/)
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from api import app  # noqa: F401 – Vercel looks for `app`
